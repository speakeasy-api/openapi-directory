package openapisdk.models.operations;



public class ListDocumentPermissionRequest {
    public String serverURL;
    public ListDocumentPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDocumentPermissionPathParams pathParams;
    public ListDocumentPermissionRequest withPathParams(ListDocumentPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDocumentPermissionQueryParams queryParams;
    public ListDocumentPermissionRequest withQueryParams(ListDocumentPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDocumentPermissionSecurity security;
    public ListDocumentPermissionRequest withSecurity(ListDocumentPermissionSecurity security) {
        this.security = security;
        return this;
    }
}