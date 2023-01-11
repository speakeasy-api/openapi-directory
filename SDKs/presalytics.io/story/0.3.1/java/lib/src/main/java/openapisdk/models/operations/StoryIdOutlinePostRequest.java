package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdOutlinePostRequest {
    public StoryIdOutlinePostPathParams pathParams;
    public StoryIdOutlinePostRequest withPathParams(StoryIdOutlinePostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public StoryIdOutlinePostRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}