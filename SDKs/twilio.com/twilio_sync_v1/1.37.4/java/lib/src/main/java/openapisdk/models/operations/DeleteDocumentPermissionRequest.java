package openapisdk.models.operations;



public class DeleteDocumentPermissionRequest {
    public String serverURL;
    public DeleteDocumentPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteDocumentPermissionPathParams pathParams;
    public DeleteDocumentPermissionRequest withPathParams(DeleteDocumentPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDocumentPermissionSecurity security;
    public DeleteDocumentPermissionRequest withSecurity(DeleteDocumentPermissionSecurity security) {
        this.security = security;
        return this;
    }
}