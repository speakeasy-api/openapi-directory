package openapisdk.models.operations;



public class FetchSyncDocumentPermissionRequest {
    public String serverURL;
    public FetchSyncDocumentPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSyncDocumentPermissionPathParams pathParams;
    public FetchSyncDocumentPermissionRequest withPathParams(FetchSyncDocumentPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSyncDocumentPermissionSecurity security;
    public FetchSyncDocumentPermissionRequest withSecurity(FetchSyncDocumentPermissionSecurity security) {
        this.security = security;
        return this;
    }
}