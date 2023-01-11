package openapisdk.models.operations;



public class FetchDocumentRequest {
    public String serverURL;
    public FetchDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDocumentPathParams pathParams;
    public FetchDocumentRequest withPathParams(FetchDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDocumentSecurity security;
    public FetchDocumentRequest withSecurity(FetchDocumentSecurity security) {
        this.security = security;
        return this;
    }
}