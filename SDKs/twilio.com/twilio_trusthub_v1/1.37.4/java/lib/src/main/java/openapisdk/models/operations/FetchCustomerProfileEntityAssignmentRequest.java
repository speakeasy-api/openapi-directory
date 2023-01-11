package openapisdk.models.operations;



public class FetchCustomerProfileEntityAssignmentRequest {
    public String serverURL;
    public FetchCustomerProfileEntityAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCustomerProfileEntityAssignmentPathParams pathParams;
    public FetchCustomerProfileEntityAssignmentRequest withPathParams(FetchCustomerProfileEntityAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCustomerProfileEntityAssignmentSecurity security;
    public FetchCustomerProfileEntityAssignmentRequest withSecurity(FetchCustomerProfileEntityAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}