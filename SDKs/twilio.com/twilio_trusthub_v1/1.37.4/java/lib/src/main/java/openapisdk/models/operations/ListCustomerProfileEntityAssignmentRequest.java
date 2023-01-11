package openapisdk.models.operations;



public class ListCustomerProfileEntityAssignmentRequest {
    public String serverURL;
    public ListCustomerProfileEntityAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCustomerProfileEntityAssignmentPathParams pathParams;
    public ListCustomerProfileEntityAssignmentRequest withPathParams(ListCustomerProfileEntityAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCustomerProfileEntityAssignmentQueryParams queryParams;
    public ListCustomerProfileEntityAssignmentRequest withQueryParams(ListCustomerProfileEntityAssignmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomerProfileEntityAssignmentSecurity security;
    public ListCustomerProfileEntityAssignmentRequest withSecurity(ListCustomerProfileEntityAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}