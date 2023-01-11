package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOauthLiveSessionTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostOauthLiveSessionTokenRequestBody request;
    public PostOauthLiveSessionTokenRequest withRequest(PostOauthLiveSessionTokenRequestBody request) {
        this.request = request;
        return this;
    }
}