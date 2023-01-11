package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessTokenRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public GetAccessTokenRequestBody request;
    public GetAccessTokenRequest withRequest(GetAccessTokenRequestBody request) {
        this.request = request;
        return this;
    }
    public GetAccessTokenSecurity security;
    public GetAccessTokenRequest withSecurity(GetAccessTokenSecurity security) {
        this.security = security;
        return this;
    }
}