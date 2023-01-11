package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdMessagesPostRequest {
    public StoryIdMessagesPostPathParams pathParams;
    public StoryIdMessagesPostRequest withPathParams(StoryIdMessagesPostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public StoryIdMessagesPostRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}