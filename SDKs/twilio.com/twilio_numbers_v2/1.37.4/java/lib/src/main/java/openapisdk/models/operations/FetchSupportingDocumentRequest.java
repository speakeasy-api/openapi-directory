package openapisdk.models.operations;



public class FetchSupportingDocumentRequest {
    public String serverURL;
    public FetchSupportingDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSupportingDocumentPathParams pathParams;
    public FetchSupportingDocumentRequest withPathParams(FetchSupportingDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSupportingDocumentSecurity security;
    public FetchSupportingDocumentRequest withSecurity(FetchSupportingDocumentSecurity security) {
        this.security = security;
        return this;
    }
}