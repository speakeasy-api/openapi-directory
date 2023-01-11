package openapisdk.models.operations;



public class DeleteTrustProductEntityAssignmentRequest {
    public String serverURL;
    public DeleteTrustProductEntityAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteTrustProductEntityAssignmentPathParams pathParams;
    public DeleteTrustProductEntityAssignmentRequest withPathParams(DeleteTrustProductEntityAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTrustProductEntityAssignmentSecurity security;
    public DeleteTrustProductEntityAssignmentRequest withSecurity(DeleteTrustProductEntityAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}