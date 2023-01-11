package openapisdk.models.operations;



public class DeleteSyncDocumentPermissionRequest {
    public String serverURL;
    public DeleteSyncDocumentPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSyncDocumentPermissionPathParams pathParams;
    public DeleteSyncDocumentPermissionRequest withPathParams(DeleteSyncDocumentPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSyncDocumentPermissionSecurity security;
    public DeleteSyncDocumentPermissionRequest withSecurity(DeleteSyncDocumentPermissionSecurity security) {
        this.security = security;
        return this;
    }
}