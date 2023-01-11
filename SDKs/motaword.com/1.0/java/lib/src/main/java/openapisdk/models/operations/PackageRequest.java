package openapisdk.models.operations;



public class PackageRequest {
    public PackagePathParams pathParams;
    public PackageRequest withPathParams(PackagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PackageQueryParams queryParams;
    public PackageRequest withQueryParams(PackageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}