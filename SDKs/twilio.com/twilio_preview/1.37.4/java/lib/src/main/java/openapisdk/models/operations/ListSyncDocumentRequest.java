package openapisdk.models.operations;



public class ListSyncDocumentRequest {
    public String serverURL;
    public ListSyncDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSyncDocumentPathParams pathParams;
    public ListSyncDocumentRequest withPathParams(ListSyncDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSyncDocumentQueryParams queryParams;
    public ListSyncDocumentRequest withQueryParams(ListSyncDocumentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSyncDocumentSecurity security;
    public ListSyncDocumentRequest withSecurity(ListSyncDocumentSecurity security) {
        this.security = security;
        return this;
    }
}