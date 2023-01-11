package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSessionRequest {
    public String serverURL;
    public CreateSessionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSessionPathParams pathParams;
    public CreateSessionRequest withPathParams(CreateSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSessionCreateSessionRequest request;
    public CreateSessionRequest withRequest(CreateSessionCreateSessionRequest request) {
        this.request = request;
        return this;
    }
    public CreateSessionSecurity security;
    public CreateSessionRequest withSecurity(CreateSessionSecurity security) {
        this.security = security;
        return this;
    }
}