package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallRequest {
    public String serverURL;
    public CreateCallRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateCallPathParams pathParams;
    public CreateCallRequest withPathParams(CreateCallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCallCreateCallRequest request;
    public CreateCallRequest withRequest(CreateCallCreateCallRequest request) {
        this.request = request;
        return this;
    }
    public CreateCallSecurity security;
    public CreateCallRequest withSecurity(CreateCallSecurity security) {
        this.security = security;
        return this;
    }
}