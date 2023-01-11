package openapisdk.models.operations;



public class WebmastersSitemapsGetRequest {
    public WebmastersSitemapsGetPathParams pathParams;
    public WebmastersSitemapsGetRequest withPathParams(WebmastersSitemapsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebmastersSitemapsGetQueryParams queryParams;
    public WebmastersSitemapsGetRequest withQueryParams(WebmastersSitemapsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WebmastersSitemapsGetSecurity security;
    public WebmastersSitemapsGetRequest withSecurity(WebmastersSitemapsGetSecurity security) {
        this.security = security;
        return this;
    }
}