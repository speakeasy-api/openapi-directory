package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallRequest {
    public UpdateCallPathParams pathParams;
    public UpdateCallRequest withPathParams(UpdateCallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateCallRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdateCallSecurity security;
    public UpdateCallRequest withSecurity(UpdateCallSecurity security) {
        this.security = security;
        return this;
    }
}