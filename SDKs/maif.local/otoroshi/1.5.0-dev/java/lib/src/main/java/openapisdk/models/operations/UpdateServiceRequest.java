package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceRequest {
    public UpdateServicePathParams pathParams;
    public UpdateServiceRequest withPathParams(UpdateServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Service request;
    public UpdateServiceRequest withRequest(openapisdk.models.shared.Service request) {
        this.request = request;
        return this;
    }
    public UpdateServiceSecurity security;
    public UpdateServiceRequest withSecurity(UpdateServiceSecurity security) {
        this.security = security;
        return this;
    }
}