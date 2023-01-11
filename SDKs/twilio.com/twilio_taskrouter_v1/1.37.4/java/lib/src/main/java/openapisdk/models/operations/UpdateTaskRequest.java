package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskRequest {
    public String serverURL;
    public UpdateTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTaskPathParams pathParams;
    public UpdateTaskRequest withPathParams(UpdateTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateTaskHeaders headers;
    public UpdateTaskRequest withHeaders(UpdateTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTaskUpdateTaskRequest request;
    public UpdateTaskRequest withRequest(UpdateTaskUpdateTaskRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTaskSecurity security;
    public UpdateTaskRequest withSecurity(UpdateTaskSecurity security) {
        this.security = security;
        return this;
    }
}