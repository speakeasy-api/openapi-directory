package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskRequest {
    public UpdateTaskPathParams pathParams;
    public UpdateTaskRequest withPathParams(UpdateTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Task request;
    public UpdateTaskRequest withRequest(openapisdk.models.shared.Task request) {
        this.request = request;
        return this;
    }
    public UpdateTaskSecurity security;
    public UpdateTaskRequest withSecurity(UpdateTaskSecurity security) {
        this.security = security;
        return this;
    }
}