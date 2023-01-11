package openapisdk.models.operations;



public class ListDocumentRequest {
    public String serverURL;
    public ListDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListDocumentPathParams pathParams;
    public ListDocumentRequest withPathParams(ListDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDocumentQueryParams queryParams;
    public ListDocumentRequest withQueryParams(ListDocumentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDocumentSecurity security;
    public ListDocumentRequest withSecurity(ListDocumentSecurity security) {
        this.security = security;
        return this;
    }
}