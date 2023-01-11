package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryPostFileJsonRequest {
    public StoryPostFileJsonQueryParams queryParams;
    public StoryPostFileJsonRequest withQueryParams(StoryPostFileJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public StoryPostFileJsonRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}