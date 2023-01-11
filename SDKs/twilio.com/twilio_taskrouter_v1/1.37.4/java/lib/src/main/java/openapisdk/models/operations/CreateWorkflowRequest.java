package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkflowRequest {
    public String serverURL;
    public CreateWorkflowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateWorkflowPathParams pathParams;
    public CreateWorkflowRequest withPathParams(CreateWorkflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateWorkflowCreateWorkflowRequest request;
    public CreateWorkflowRequest withRequest(CreateWorkflowCreateWorkflowRequest request) {
        this.request = request;
        return this;
    }
    public CreateWorkflowSecurity security;
    public CreateWorkflowRequest withSecurity(CreateWorkflowSecurity security) {
        this.security = security;
        return this;
    }
}