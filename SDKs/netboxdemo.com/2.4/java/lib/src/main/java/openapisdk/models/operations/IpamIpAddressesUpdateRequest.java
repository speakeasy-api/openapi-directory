package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamIpAddressesUpdateRequest {
    public IpamIpAddressesUpdatePathParams pathParams;
    public IpamIpAddressesUpdateRequest withPathParams(IpamIpAddressesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableIpAddressInput request;
    public IpamIpAddressesUpdateRequest withRequest(openapisdk.models.shared.WritableIpAddressInput request) {
        this.request = request;
        return this;
    }
}