package openapisdk.models.operations;



public class WebsecurityscannerProjectsScanConfigsListRequest {
    public WebsecurityscannerProjectsScanConfigsListPathParams pathParams;
    public WebsecurityscannerProjectsScanConfigsListRequest withPathParams(WebsecurityscannerProjectsScanConfigsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebsecurityscannerProjectsScanConfigsListQueryParams queryParams;
    public WebsecurityscannerProjectsScanConfigsListRequest withQueryParams(WebsecurityscannerProjectsScanConfigsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebsecurityscannerProjectsScanConfigsListSecurity security;
    public WebsecurityscannerProjectsScanConfigsListRequest withSecurity(WebsecurityscannerProjectsScanConfigsListSecurity security) {
        this.security = security;
        return this;
    }
}