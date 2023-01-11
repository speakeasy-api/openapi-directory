package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandTaskRequest {
    public String serverURL;
    public CreateUnderstandTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUnderstandTaskPathParams pathParams;
    public CreateUnderstandTaskRequest withPathParams(CreateUnderstandTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUnderstandTaskCreateUnderstandTaskRequest request;
    public CreateUnderstandTaskRequest withRequest(CreateUnderstandTaskCreateUnderstandTaskRequest request) {
        this.request = request;
        return this;
    }
    public CreateUnderstandTaskSecurity security;
    public CreateUnderstandTaskRequest withSecurity(CreateUnderstandTaskSecurity security) {
        this.security = security;
        return this;
    }
}