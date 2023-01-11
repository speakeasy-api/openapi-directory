package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOauthAccessTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostOauthAccessTokenRequestBody request;
    public PostOauthAccessTokenRequest withRequest(PostOauthAccessTokenRequestBody request) {
        this.request = request;
        return this;
    }
}