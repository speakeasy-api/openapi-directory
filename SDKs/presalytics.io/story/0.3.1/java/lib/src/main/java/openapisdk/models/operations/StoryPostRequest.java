package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryPostRequest {
    public StoryPostQueryParams queryParams;
    public StoryPostRequest withQueryParams(StoryPostQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public StoryPostRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}