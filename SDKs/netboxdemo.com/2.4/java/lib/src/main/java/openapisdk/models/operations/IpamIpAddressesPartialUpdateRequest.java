package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamIpAddressesPartialUpdateRequest {
    public IpamIpAddressesPartialUpdatePathParams pathParams;
    public IpamIpAddressesPartialUpdateRequest withPathParams(IpamIpAddressesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableIpAddressInput request;
    public IpamIpAddressesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableIpAddressInput request) {
        this.request = request;
        return this;
    }
}