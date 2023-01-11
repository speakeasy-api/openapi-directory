package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOauth2TokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object request;
    public PostOauth2TokenRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostOauth2TokenSecurity security;
    public PostOauth2TokenRequest withSecurity(PostOauth2TokenSecurity security) {
        this.security = security;
        return this;
    }
}