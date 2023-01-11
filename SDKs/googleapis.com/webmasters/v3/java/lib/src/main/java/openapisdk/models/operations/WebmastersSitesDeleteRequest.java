package openapisdk.models.operations;



public class WebmastersSitesDeleteRequest {
    public WebmastersSitesDeletePathParams pathParams;
    public WebmastersSitesDeleteRequest withPathParams(WebmastersSitesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebmastersSitesDeleteQueryParams queryParams;
    public WebmastersSitesDeleteRequest withQueryParams(WebmastersSitesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebmastersSitesDeleteSecurity security;
    public WebmastersSitesDeleteRequest withSecurity(WebmastersSitesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}