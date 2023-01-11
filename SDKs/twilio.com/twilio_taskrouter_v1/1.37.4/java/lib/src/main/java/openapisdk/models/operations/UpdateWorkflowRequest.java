package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkflowRequest {
    public String serverURL;
    public UpdateWorkflowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWorkflowPathParams pathParams;
    public UpdateWorkflowRequest withPathParams(UpdateWorkflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWorkflowUpdateWorkflowRequest request;
    public UpdateWorkflowRequest withRequest(UpdateWorkflowUpdateWorkflowRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWorkflowSecurity security;
    public UpdateWorkflowRequest withSecurity(UpdateWorkflowSecurity security) {
        this.security = security;
        return this;
    }
}