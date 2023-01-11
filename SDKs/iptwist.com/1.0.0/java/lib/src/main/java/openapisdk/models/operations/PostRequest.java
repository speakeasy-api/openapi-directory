package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Request request;
    public PostRequest withRequest(openapisdk.models.shared.Request request) {
        this.request = request;
        return this;
    }
    public PostSecurity security;
    public PostRequest withSecurity(PostSecurity security) {
        this.security = security;
        return this;
    }
}