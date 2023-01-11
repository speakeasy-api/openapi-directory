package openapisdk.models.operations;



public class FetchHostedNumbersAuthorizationDocumentRequest {
    public String serverURL;
    public FetchHostedNumbersAuthorizationDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchHostedNumbersAuthorizationDocumentPathParams pathParams;
    public FetchHostedNumbersAuthorizationDocumentRequest withPathParams(FetchHostedNumbersAuthorizationDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchHostedNumbersAuthorizationDocumentSecurity security;
    public FetchHostedNumbersAuthorizationDocumentRequest withSecurity(FetchHostedNumbersAuthorizationDocumentSecurity security) {
        this.security = security;
        return this;
    }
}