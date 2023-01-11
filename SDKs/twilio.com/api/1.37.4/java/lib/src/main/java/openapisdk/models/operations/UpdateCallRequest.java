package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallRequest {
    public String serverURL;
    public UpdateCallRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateCallPathParams pathParams;
    public UpdateCallRequest withPathParams(UpdateCallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCallUpdateCallRequest request;
    public UpdateCallRequest withRequest(UpdateCallUpdateCallRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCallSecurity security;
    public UpdateCallRequest withSecurity(UpdateCallSecurity security) {
        this.security = security;
        return this;
    }
}