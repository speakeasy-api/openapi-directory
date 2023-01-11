package openapisdk.models.operations;



public class ListTrustProductEntityAssignmentRequest {
    public String serverURL;
    public ListTrustProductEntityAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTrustProductEntityAssignmentPathParams pathParams;
    public ListTrustProductEntityAssignmentRequest withPathParams(ListTrustProductEntityAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTrustProductEntityAssignmentQueryParams queryParams;
    public ListTrustProductEntityAssignmentRequest withQueryParams(ListTrustProductEntityAssignmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTrustProductEntityAssignmentSecurity security;
    public ListTrustProductEntityAssignmentRequest withSecurity(ListTrustProductEntityAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}