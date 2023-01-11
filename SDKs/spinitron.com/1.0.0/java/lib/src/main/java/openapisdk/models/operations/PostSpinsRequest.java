package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSpinsRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PostSpinsRequestBody request;
    public PostSpinsRequest withRequest(PostSpinsRequestBody request) {
        this.request = request;
        return this;
    }
}