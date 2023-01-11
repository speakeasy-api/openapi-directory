package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkflowRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWorkflow request;
    public CreateWorkflowRequest withRequest(openapisdk.models.shared.CreateWorkflow request) {
        this.request = request;
        return this;
    }
    public CreateWorkflowSecurity security;
    public CreateWorkflowRequest withSecurity(CreateWorkflowSecurity security) {
        this.security = security;
        return this;
    }
}