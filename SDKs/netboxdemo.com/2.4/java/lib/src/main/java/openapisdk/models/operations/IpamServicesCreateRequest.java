package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamServicesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableServiceInput request;
    public IpamServicesCreateRequest withRequest(openapisdk.models.shared.WritableServiceInput request) {
        this.request = request;
        return this;
    }
}