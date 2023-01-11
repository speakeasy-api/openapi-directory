package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTokenRequestBody request;
    public CreateTokenRequest withRequest(CreateTokenRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateTokenSecurity security;
    public CreateTokenRequest withSecurity(CreateTokenSecurity security) {
        this.security = security;
        return this;
    }
}