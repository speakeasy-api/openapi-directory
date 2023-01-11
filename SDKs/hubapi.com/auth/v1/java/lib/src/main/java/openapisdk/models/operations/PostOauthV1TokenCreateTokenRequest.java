package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOauthV1TokenCreateTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object request;
    public PostOauthV1TokenCreateTokenRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}