package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskRequest {
    public UpdateTaskPathParams pathParams;
    public UpdateTaskRequest withPathParams(UpdateTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TaskInput request;
    public UpdateTaskRequest withRequest(openapisdk.models.shared.TaskInput request) {
        this.request = request;
        return this;
    }
}