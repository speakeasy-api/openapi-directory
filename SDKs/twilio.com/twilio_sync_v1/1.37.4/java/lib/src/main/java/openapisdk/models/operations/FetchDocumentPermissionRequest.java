package openapisdk.models.operations;



public class FetchDocumentPermissionRequest {
    public String serverURL;
    public FetchDocumentPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDocumentPermissionPathParams pathParams;
    public FetchDocumentPermissionRequest withPathParams(FetchDocumentPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDocumentPermissionSecurity security;
    public FetchDocumentPermissionRequest withSecurity(FetchDocumentPermissionSecurity security) {
        this.security = security;
        return this;
    }
}