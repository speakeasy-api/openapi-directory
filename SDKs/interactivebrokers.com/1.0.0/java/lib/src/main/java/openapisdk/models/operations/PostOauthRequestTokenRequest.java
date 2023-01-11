package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOauthRequestTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostOauthRequestTokenRequestBody request;
    public PostOauthRequestTokenRequest withRequest(PostOauthRequestTokenRequestBody request) {
        this.request = request;
        return this;
    }
}