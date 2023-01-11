package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandTaskRequest {
    public String serverURL;
    public UpdateUnderstandTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandTaskPathParams pathParams;
    public UpdateUnderstandTaskRequest withPathParams(UpdateUnderstandTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandTaskUpdateUnderstandTaskRequest request;
    public UpdateUnderstandTaskRequest withRequest(UpdateUnderstandTaskUpdateUnderstandTaskRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandTaskSecurity security;
    public UpdateUnderstandTaskRequest withSecurity(UpdateUnderstandTaskSecurity security) {
        this.security = security;
        return this;
    }
}