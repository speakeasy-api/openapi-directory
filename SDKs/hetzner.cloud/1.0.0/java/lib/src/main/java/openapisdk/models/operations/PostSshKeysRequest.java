package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSshKeysRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostSshKeysRequestBody request;
    public PostSshKeysRequest withRequest(PostSshKeysRequestBody request) {
        this.request = request;
        return this;
    }
}