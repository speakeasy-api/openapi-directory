package openapisdk.models.operations;



public class DeleteCustomerProfileEntityAssignmentRequest {
    public String serverURL;
    public DeleteCustomerProfileEntityAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCustomerProfileEntityAssignmentPathParams pathParams;
    public DeleteCustomerProfileEntityAssignmentRequest withPathParams(DeleteCustomerProfileEntityAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCustomerProfileEntityAssignmentSecurity security;
    public DeleteCustomerProfileEntityAssignmentRequest withSecurity(DeleteCustomerProfileEntityAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}