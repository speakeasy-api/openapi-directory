package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateQueueRequest {
    public String serverURL;
    public CreateQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateQueuePathParams pathParams;
    public CreateQueueRequest withPathParams(CreateQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateQueueCreateQueueRequest request;
    public CreateQueueRequest withRequest(CreateQueueCreateQueueRequest request) {
        this.request = request;
        return this;
    }
    public CreateQueueSecurity security;
    public CreateQueueRequest withSecurity(CreateQueueSecurity security) {
        this.security = security;
        return this;
    }
}