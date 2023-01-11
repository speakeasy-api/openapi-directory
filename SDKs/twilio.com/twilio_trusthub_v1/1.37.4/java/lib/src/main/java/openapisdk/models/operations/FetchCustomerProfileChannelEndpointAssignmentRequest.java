package openapisdk.models.operations;



public class FetchCustomerProfileChannelEndpointAssignmentRequest {
    public String serverURL;
    public FetchCustomerProfileChannelEndpointAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCustomerProfileChannelEndpointAssignmentPathParams pathParams;
    public FetchCustomerProfileChannelEndpointAssignmentRequest withPathParams(FetchCustomerProfileChannelEndpointAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCustomerProfileChannelEndpointAssignmentSecurity security;
    public FetchCustomerProfileChannelEndpointAssignmentRequest withSecurity(FetchCustomerProfileChannelEndpointAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}