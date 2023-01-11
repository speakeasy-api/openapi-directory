package openapisdk.models.operations;



public class WebmastersSitemapsListRequest {
    public WebmastersSitemapsListPathParams pathParams;
    public WebmastersSitemapsListRequest withPathParams(WebmastersSitemapsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebmastersSitemapsListQueryParams queryParams;
    public WebmastersSitemapsListRequest withQueryParams(WebmastersSitemapsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebmastersSitemapsListSecurity security;
    public WebmastersSitemapsListRequest withSecurity(WebmastersSitemapsListSecurity security) {
        this.security = security;
        return this;
    }
}