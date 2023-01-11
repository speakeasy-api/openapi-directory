package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdFilePostRequest {
    public StoryIdFilePostPathParams pathParams;
    public StoryIdFilePostRequest withPathParams(StoryIdFilePostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StoryIdFilePostQueryParams queryParams;
    public StoryIdFilePostRequest withQueryParams(StoryIdFilePostQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public StoryIdFilePostRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}