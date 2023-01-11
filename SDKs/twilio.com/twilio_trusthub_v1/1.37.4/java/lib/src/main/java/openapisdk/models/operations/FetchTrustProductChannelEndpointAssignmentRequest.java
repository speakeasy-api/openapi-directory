package openapisdk.models.operations;



public class FetchTrustProductChannelEndpointAssignmentRequest {
    public String serverURL;
    public FetchTrustProductChannelEndpointAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTrustProductChannelEndpointAssignmentPathParams pathParams;
    public FetchTrustProductChannelEndpointAssignmentRequest withPathParams(FetchTrustProductChannelEndpointAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTrustProductChannelEndpointAssignmentSecurity security;
    public FetchTrustProductChannelEndpointAssignmentRequest withSecurity(FetchTrustProductChannelEndpointAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}