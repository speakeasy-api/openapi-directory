package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveWorkflowUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SaveWorkflowUserRequestBody request;
    public SaveWorkflowUserRequest withRequest(SaveWorkflowUserRequestBody request) {
        this.request = request;
        return this;
    }
}