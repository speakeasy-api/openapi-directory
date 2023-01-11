package openapisdk.models.operations;



public class ListHostedNumbersAuthorizationDocumentRequest {
    public String serverURL;
    public ListHostedNumbersAuthorizationDocumentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListHostedNumbersAuthorizationDocumentQueryParams queryParams;
    public ListHostedNumbersAuthorizationDocumentRequest withQueryParams(ListHostedNumbersAuthorizationDocumentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHostedNumbersAuthorizationDocumentSecurity security;
    public ListHostedNumbersAuthorizationDocumentRequest withSecurity(ListHostedNumbersAuthorizationDocumentSecurity security) {
        this.security = security;
        return this;
    }
}