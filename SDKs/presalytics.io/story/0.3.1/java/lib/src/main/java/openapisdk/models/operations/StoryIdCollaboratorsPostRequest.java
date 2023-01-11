package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdCollaboratorsPostRequest {
    public StoryIdCollaboratorsPostPathParams pathParams;
    public StoryIdCollaboratorsPostRequest withPathParams(StoryIdCollaboratorsPostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public StoryIdCollaboratorsPostRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}