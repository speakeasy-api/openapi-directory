package openapisdk.models.operations;



public class SystemPackagesRequest {
    public SystemPackagesPathParams pathParams;
    public SystemPackagesRequest withPathParams(SystemPackagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SystemPackagesQueryParams queryParams;
    public SystemPackagesRequest withQueryParams(SystemPackagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SystemPackagesSecurity security;
    public SystemPackagesRequest withSecurity(SystemPackagesSecurity security) {
        this.security = security;
        return this;
    }
}