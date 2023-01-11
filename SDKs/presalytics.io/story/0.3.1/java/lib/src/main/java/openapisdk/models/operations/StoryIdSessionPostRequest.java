package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdSessionPostRequest {
    public StoryIdSessionPostPathParams pathParams;
    public StoryIdSessionPostRequest withPathParams(StoryIdSessionPostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public StoryIdSessionPostRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}