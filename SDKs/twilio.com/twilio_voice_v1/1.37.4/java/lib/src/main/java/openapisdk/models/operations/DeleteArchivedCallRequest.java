package openapisdk.models.operations;



public class DeleteArchivedCallRequest {
    public String serverURL;
    public DeleteArchivedCallRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteArchivedCallPathParams pathParams;
    public DeleteArchivedCallRequest withPathParams(DeleteArchivedCallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteArchivedCallSecurity security;
    public DeleteArchivedCallRequest withSecurity(DeleteArchivedCallSecurity security) {
        this.security = security;
        return this;
    }
}