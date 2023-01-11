package openapisdk.models.operations;



public class ListSupportingDocumentRequest {
    public String serverURL;
    public ListSupportingDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSupportingDocumentQueryParams queryParams;
    public ListSupportingDocumentRequest withQueryParams(ListSupportingDocumentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSupportingDocumentSecurity security;
    public ListSupportingDocumentRequest withSecurity(ListSupportingDocumentSecurity security) {
        this.security = security;
        return this;
    }
}