package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskQueueRequest {
    public String serverURL;
    public UpdateTaskQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTaskQueuePathParams pathParams;
    public UpdateTaskQueueRequest withPathParams(UpdateTaskQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTaskQueueUpdateTaskQueueRequest request;
    public UpdateTaskQueueRequest withRequest(UpdateTaskQueueUpdateTaskQueueRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTaskQueueSecurity security;
    public UpdateTaskQueueRequest withSecurity(UpdateTaskQueueSecurity security) {
        this.security = security;
        return this;
    }
}