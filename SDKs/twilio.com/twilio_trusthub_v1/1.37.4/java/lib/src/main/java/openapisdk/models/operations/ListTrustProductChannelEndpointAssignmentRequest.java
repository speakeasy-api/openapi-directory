package openapisdk.models.operations;



public class ListTrustProductChannelEndpointAssignmentRequest {
    public String serverURL;
    public ListTrustProductChannelEndpointAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTrustProductChannelEndpointAssignmentPathParams pathParams;
    public ListTrustProductChannelEndpointAssignmentRequest withPathParams(ListTrustProductChannelEndpointAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTrustProductChannelEndpointAssignmentQueryParams queryParams;
    public ListTrustProductChannelEndpointAssignmentRequest withQueryParams(ListTrustProductChannelEndpointAssignmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTrustProductChannelEndpointAssignmentSecurity security;
    public ListTrustProductChannelEndpointAssignmentRequest withSecurity(ListTrustProductChannelEndpointAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}