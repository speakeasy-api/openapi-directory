package openapisdk.models.operations;



public class LatestPackageRequest {
    public LatestPackagePathParams pathParams;
    public LatestPackageRequest withPathParams(LatestPackagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LatestPackageSecurity security;
    public LatestPackageRequest withSecurity(LatestPackageSecurity security) {
        this.security = security;
        return this;
    }
}