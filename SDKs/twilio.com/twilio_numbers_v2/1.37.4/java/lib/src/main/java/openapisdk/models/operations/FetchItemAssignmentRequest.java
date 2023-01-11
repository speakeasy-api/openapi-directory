package openapisdk.models.operations;



public class FetchItemAssignmentRequest {
    public String serverURL;
    public FetchItemAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchItemAssignmentPathParams pathParams;
    public FetchItemAssignmentRequest withPathParams(FetchItemAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchItemAssignmentSecurity security;
    public FetchItemAssignmentRequest withSecurity(FetchItemAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}