package openapisdk.models.operations;



public class DeleteItemAssignmentRequest {
    public String serverURL;
    public DeleteItemAssignmentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteItemAssignmentPathParams pathParams;
    public DeleteItemAssignmentRequest withPathParams(DeleteItemAssignmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteItemAssignmentSecurity security;
    public DeleteItemAssignmentRequest withSecurity(DeleteItemAssignmentSecurity security) {
        this.security = security;
        return this;
    }
}