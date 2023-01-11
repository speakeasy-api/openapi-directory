package openapisdk.models.operations;



public class PackageSystemsRequest {
    public PackageSystemsPathParams pathParams;
    public PackageSystemsRequest withPathParams(PackageSystemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PackageSystemsQueryParams queryParams;
    public PackageSystemsRequest withQueryParams(PackageSystemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PackageSystemsSecurity security;
    public PackageSystemsRequest withSecurity(PackageSystemsSecurity security) {
        this.security = security;
        return this;
    }
}