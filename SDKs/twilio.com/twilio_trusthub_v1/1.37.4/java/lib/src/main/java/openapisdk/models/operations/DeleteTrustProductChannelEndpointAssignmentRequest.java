package openapisdk.models.operations;



public class DeleteTrustProductChannelEndpointAssignmentRequest {
    public String serverURL;
    public DeleteTrustProductChannelEndpointAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteTrustProductChannelEndpointAssignmentPathParams pathParams;
    public DeleteTrustProductChannelEndpointAssignmentRequest withPathParams(DeleteTrustProductChannelEndpointAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTrustProductChannelEndpointAssignmentSecurity security;
    public DeleteTrustProductChannelEndpointAssignmentRequest withSecurity(DeleteTrustProductChannelEndpointAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}