package openapisdk.models.operations;



public class DeleteCustomerProfileChannelEndpointAssignmentRequest {
    public String serverURL;
    public DeleteCustomerProfileChannelEndpointAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteCustomerProfileChannelEndpointAssignmentPathParams pathParams;
    public DeleteCustomerProfileChannelEndpointAssignmentRequest withPathParams(DeleteCustomerProfileChannelEndpointAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCustomerProfileChannelEndpointAssignmentSecurity security;
    public DeleteCustomerProfileChannelEndpointAssignmentRequest withSecurity(DeleteCustomerProfileChannelEndpointAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}