package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamIpAddressesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableIpAddressInput request;
    public IpamIpAddressesCreateRequest withRequest(openapisdk.models.shared.WritableIpAddressInput request) {
        this.request = request;
        return this;
    }
}