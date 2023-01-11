package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExecutionRequest {
    public String serverURL;
    public CreateExecutionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateExecutionPathParams pathParams;
    public CreateExecutionRequest withPathParams(CreateExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateExecutionCreateExecutionRequest request;
    public CreateExecutionRequest withRequest(CreateExecutionCreateExecutionRequest request) {
        this.request = request;
        return this;
    }
    public CreateExecutionSecurity security;
    public CreateExecutionRequest withSecurity(CreateExecutionSecurity security) {
        this.security = security;
        return this;
    }
}