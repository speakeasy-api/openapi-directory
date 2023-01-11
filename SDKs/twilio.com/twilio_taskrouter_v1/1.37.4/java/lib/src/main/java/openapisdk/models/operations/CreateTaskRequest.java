package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskRequest {
    public String serverURL;
    public CreateTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateTaskPathParams pathParams;
    public CreateTaskRequest withPathParams(CreateTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTaskCreateTaskRequest request;
    public CreateTaskRequest withRequest(CreateTaskCreateTaskRequest request) {
        this.request = request;
        return this;
    }
    public CreateTaskSecurity security;
    public CreateTaskRequest withSecurity(CreateTaskSecurity security) {
        this.security = security;
        return this;
    }
}