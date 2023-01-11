package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdEventsPostRequest {
    public StoryIdEventsPostPathParams pathParams;
    public StoryIdEventsPostRequest withPathParams(StoryIdEventsPostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManageEvent request;
    public StoryIdEventsPostRequest withRequest(openapisdk.models.shared.ManageEvent request) {
        this.request = request;
        return this;
    }
}