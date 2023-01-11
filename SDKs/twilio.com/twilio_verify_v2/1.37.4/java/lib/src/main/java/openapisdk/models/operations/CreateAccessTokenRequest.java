package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccessTokenRequest {
    public String serverURL;
    public CreateAccessTokenRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateAccessTokenPathParams pathParams;
    public CreateAccessTokenRequest withPathParams(CreateAccessTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateAccessTokenCreateAccessTokenRequest request;
    public CreateAccessTokenRequest withRequest(CreateAccessTokenCreateAccessTokenRequest request) {
        this.request = request;
        return this;
    }
    public CreateAccessTokenSecurity security;
    public CreateAccessTokenRequest withSecurity(CreateAccessTokenSecurity security) {
        this.security = security;
        return this;
    }
}