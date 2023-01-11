package openapisdk.models.operations;



public class DeleteCustomerProfileRequest {
    public String serverURL;
    public DeleteCustomerProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCustomerProfilePathParams pathParams;
    public DeleteCustomerProfileRequest withPathParams(DeleteCustomerProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCustomerProfileSecurity security;
    public DeleteCustomerProfileRequest withSecurity(DeleteCustomerProfileSecurity security) {
        this.security = security;
        return this;
    }
}