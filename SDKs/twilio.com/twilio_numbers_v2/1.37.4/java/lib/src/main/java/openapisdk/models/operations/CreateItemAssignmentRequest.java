package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateItemAssignmentRequest {
    public String serverURL;
    public CreateItemAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateItemAssignmentPathParams pathParams;
    public CreateItemAssignmentRequest withPathParams(CreateItemAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateItemAssignmentCreateItemAssignmentRequest request;
    public CreateItemAssignmentRequest withRequest(CreateItemAssignmentCreateItemAssignmentRequest request) {
        this.request = request;
        return this;
    }
    public CreateItemAssignmentSecurity security;
    public CreateItemAssignmentRequest withSecurity(CreateItemAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}