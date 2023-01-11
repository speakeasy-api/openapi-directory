package openapisdk.models.operations;



public class ListPlatformRegionsRequest {
    public ListPlatformRegionsPathParams pathParams;
    public ListPlatformRegionsRequest withPathParams(ListPlatformRegionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListPlatformRegionsQueryParams queryParams;
    public ListPlatformRegionsRequest withQueryParams(ListPlatformRegionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPlatformRegionsSecurity security;
    public ListPlatformRegionsRequest withSecurity(ListPlatformRegionsSecurity security) {
        this.security = security;
        return this;
    }
}