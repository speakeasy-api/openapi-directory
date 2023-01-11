package openapisdk.models.operations;



public class WebmastersSitesAddRequest {
    public WebmastersSitesAddPathParams pathParams;
    public WebmastersSitesAddRequest withPathParams(WebmastersSitesAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebmastersSitesAddQueryParams queryParams;
    public WebmastersSitesAddRequest withQueryParams(WebmastersSitesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebmastersSitesAddSecurity security;
    public WebmastersSitesAddRequest withSecurity(WebmastersSitesAddSecurity security) {
        this.security = security;
        return this;
    }
}