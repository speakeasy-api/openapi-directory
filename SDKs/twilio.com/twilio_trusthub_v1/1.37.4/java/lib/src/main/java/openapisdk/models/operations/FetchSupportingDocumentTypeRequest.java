package openapisdk.models.operations;



public class FetchSupportingDocumentTypeRequest {
    public String serverURL;
    public FetchSupportingDocumentTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSupportingDocumentTypePathParams pathParams;
    public FetchSupportingDocumentTypeRequest withPathParams(FetchSupportingDocumentTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSupportingDocumentTypeSecurity security;
    public FetchSupportingDocumentTypeRequest withSecurity(FetchSupportingDocumentTypeSecurity security) {
        this.security = security;
        return this;
    }
}