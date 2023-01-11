package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskQueueRequest {
    public String serverURL;
    public CreateTaskQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateTaskQueuePathParams pathParams;
    public CreateTaskQueueRequest withPathParams(CreateTaskQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTaskQueueCreateTaskQueueRequest request;
    public CreateTaskQueueRequest withRequest(CreateTaskQueueCreateTaskQueueRequest request) {
        this.request = request;
        return this;
    }
    public CreateTaskQueueSecurity security;
    public CreateTaskQueueRequest withSecurity(CreateTaskQueueSecurity security) {
        this.security = security;
        return this;
    }
}