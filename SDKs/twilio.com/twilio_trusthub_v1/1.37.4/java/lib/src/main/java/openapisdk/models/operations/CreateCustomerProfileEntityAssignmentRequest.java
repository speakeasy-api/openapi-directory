package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileEntityAssignmentRequest {
    public String serverURL;
    public CreateCustomerProfileEntityAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateCustomerProfileEntityAssignmentPathParams pathParams;
    public CreateCustomerProfileEntityAssignmentRequest withPathParams(CreateCustomerProfileEntityAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest request;
    public CreateCustomerProfileEntityAssignmentRequest withRequest(CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest request) {
        this.request = request;
        return this;
    }
    public CreateCustomerProfileEntityAssignmentSecurity security;
    public CreateCustomerProfileEntityAssignmentRequest withSecurity(CreateCustomerProfileEntityAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}