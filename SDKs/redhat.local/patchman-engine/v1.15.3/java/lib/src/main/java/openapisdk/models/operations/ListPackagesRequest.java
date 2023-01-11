package openapisdk.models.operations;



public class ListPackagesRequest {
    public ListPackagesQueryParams queryParams;
    public ListPackagesRequest withQueryParams(ListPackagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPackagesSecurity security;
    public ListPackagesRequest withSecurity(ListPackagesSecurity security) {
        this.security = security;
        return this;
    }
}