package openapisdk.models.operations;



public class ListSupportingDocumentTypeRequest {
    public String serverURL;
    public ListSupportingDocumentTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListSupportingDocumentTypeQueryParams queryParams;
    public ListSupportingDocumentTypeRequest withQueryParams(ListSupportingDocumentTypeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSupportingDocumentTypeSecurity security;
    public ListSupportingDocumentTypeRequest withSecurity(ListSupportingDocumentTypeSecurity security) {
        this.security = security;
        return this;
    }
}