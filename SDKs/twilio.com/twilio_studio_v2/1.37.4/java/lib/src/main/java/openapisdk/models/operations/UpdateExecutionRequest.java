package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExecutionRequest {
    public String serverURL;
    public UpdateExecutionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateExecutionPathParams pathParams;
    public UpdateExecutionRequest withPathParams(UpdateExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateExecutionUpdateExecutionRequest request;
    public UpdateExecutionRequest withRequest(UpdateExecutionUpdateExecutionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateExecutionSecurity security;
    public UpdateExecutionRequest withSecurity(UpdateExecutionSecurity security) {
        this.security = security;
        return this;
    }
}