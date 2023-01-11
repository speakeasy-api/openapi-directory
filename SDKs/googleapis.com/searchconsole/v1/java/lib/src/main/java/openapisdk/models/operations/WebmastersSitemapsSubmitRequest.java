package openapisdk.models.operations;



public class WebmastersSitemapsSubmitRequest {
    public WebmastersSitemapsSubmitPathParams pathParams;
    public WebmastersSitemapsSubmitRequest withPathParams(WebmastersSitemapsSubmitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebmastersSitemapsSubmitQueryParams queryParams;
    public WebmastersSitemapsSubmitRequest withQueryParams(WebmastersSitemapsSubmitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebmastersSitemapsSubmitSecurity security;
    public WebmastersSitemapsSubmitRequest withSecurity(WebmastersSitemapsSubmitSecurity security) {
        this.security = security;
        return this;
    }
}