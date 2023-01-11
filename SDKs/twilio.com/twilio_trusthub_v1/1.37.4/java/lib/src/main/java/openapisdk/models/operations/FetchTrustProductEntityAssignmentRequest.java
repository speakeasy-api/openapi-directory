package openapisdk.models.operations;



public class FetchTrustProductEntityAssignmentRequest {
    public String serverURL;
    public FetchTrustProductEntityAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTrustProductEntityAssignmentPathParams pathParams;
    public FetchTrustProductEntityAssignmentRequest withPathParams(FetchTrustProductEntityAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTrustProductEntityAssignmentSecurity security;
    public FetchTrustProductEntityAssignmentRequest withSecurity(FetchTrustProductEntityAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}