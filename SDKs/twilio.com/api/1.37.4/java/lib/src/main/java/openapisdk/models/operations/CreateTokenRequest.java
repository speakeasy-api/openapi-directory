package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenRequest {
    public String serverURL;
    public CreateTokenRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateTokenPathParams pathParams;
    public CreateTokenRequest withPathParams(CreateTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTokenCreateTokenRequest request;
    public CreateTokenRequest withRequest(CreateTokenCreateTokenRequest request) {
        this.request = request;
        return this;
    }
    public CreateTokenSecurity security;
    public CreateTokenRequest withSecurity(CreateTokenSecurity security) {
        this.security = security;
        return this;
    }
}