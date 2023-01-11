package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCallsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostCallsRequestBody request;
    public PostCallsRequest withRequest(PostCallsRequestBody request) {
        this.request = request;
        return this;
    }
}