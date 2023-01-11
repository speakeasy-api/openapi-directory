package openapisdk.models.operations;



public class WebmastersSitemapsDeleteRequest {
    public WebmastersSitemapsDeletePathParams pathParams;
    public WebmastersSitemapsDeleteRequest withPathParams(WebmastersSitemapsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebmastersSitemapsDeleteQueryParams queryParams;
    public WebmastersSitemapsDeleteRequest withQueryParams(WebmastersSitemapsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebmastersSitemapsDeleteSecurity security;
    public WebmastersSitemapsDeleteRequest withSecurity(WebmastersSitemapsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}