package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdCollaboratorsUseridPutRequest {
    public StoryIdCollaboratorsUseridPutPathParams pathParams;
    public StoryIdCollaboratorsUseridPutRequest withPathParams(StoryIdCollaboratorsUseridPutPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StoryCollaborator request;
    public StoryIdCollaboratorsUseridPutRequest withRequest(openapisdk.models.shared.StoryCollaborator request) {
        this.request = request;
        return this;
    }
}