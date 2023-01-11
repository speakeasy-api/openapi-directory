package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamServicesPartialUpdateRequest {
    public IpamServicesPartialUpdatePathParams pathParams;
    public IpamServicesPartialUpdateRequest withPathParams(IpamServicesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableServiceInput request;
    public IpamServicesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableServiceInput request) {
        this.request = request;
        return this;
    }
}