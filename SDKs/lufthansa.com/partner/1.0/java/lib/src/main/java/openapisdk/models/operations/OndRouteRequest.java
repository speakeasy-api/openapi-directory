package openapisdk.models.operations;



public class OndRouteRequest {
    public OndRoutePathParams pathParams;
    public OndRouteRequest withPathParams(OndRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OndRouteQueryParams queryParams;
    public OndRouteRequest withQueryParams(OndRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OndRouteHeaders headers;
    public OndRouteRequest withHeaders(OndRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public OndRouteSecurity security;
    public OndRouteRequest withSecurity(OndRouteSecurity security) {
        this.security = security;
        return this;
    }
}