package openapisdk.models.operations;



public class PackageVersionsRequest {
    public PackageVersionsPathParams pathParams;
    public PackageVersionsRequest withPathParams(PackageVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PackageVersionsQueryParams queryParams;
    public PackageVersionsRequest withQueryParams(PackageVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PackageVersionsSecurity security;
    public PackageVersionsRequest withSecurity(PackageVersionsSecurity security) {
        this.security = security;
        return this;
    }
}