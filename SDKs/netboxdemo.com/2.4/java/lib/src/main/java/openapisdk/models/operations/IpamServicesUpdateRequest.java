package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamServicesUpdateRequest {
    public IpamServicesUpdatePathParams pathParams;
    public IpamServicesUpdateRequest withPathParams(IpamServicesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableServiceInput request;
    public IpamServicesUpdateRequest withRequest(openapisdk.models.shared.WritableServiceInput request) {
        this.request = request;
        return this;
    }
}