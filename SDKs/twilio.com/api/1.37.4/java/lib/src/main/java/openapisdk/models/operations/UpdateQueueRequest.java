package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateQueueRequest {
    public String serverURL;
    public UpdateQueueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateQueuePathParams pathParams;
    public UpdateQueueRequest withPathParams(UpdateQueuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateQueueUpdateQueueRequest request;
    public UpdateQueueRequest withRequest(UpdateQueueUpdateQueueRequest request) {
        this.request = request;
        return this;
    }
    public UpdateQueueSecurity security;
    public UpdateQueueRequest withSecurity(UpdateQueueSecurity security) {
        this.security = security;
        return this;
    }
}