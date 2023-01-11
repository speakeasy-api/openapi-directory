package openapisdk.models.operations;



public class ListCustomerProfileChannelEndpointAssignmentRequest {
    public String serverURL;
    public ListCustomerProfileChannelEndpointAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCustomerProfileChannelEndpointAssignmentPathParams pathParams;
    public ListCustomerProfileChannelEndpointAssignmentRequest withPathParams(ListCustomerProfileChannelEndpointAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCustomerProfileChannelEndpointAssignmentQueryParams queryParams;
    public ListCustomerProfileChannelEndpointAssignmentRequest withQueryParams(ListCustomerProfileChannelEndpointAssignmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomerProfileChannelEndpointAssignmentSecurity security;
    public ListCustomerProfileChannelEndpointAssignmentRequest withSecurity(ListCustomerProfileChannelEndpointAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}