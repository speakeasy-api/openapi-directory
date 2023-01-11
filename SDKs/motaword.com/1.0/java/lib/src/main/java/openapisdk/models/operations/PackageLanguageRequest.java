package openapisdk.models.operations;



public class PackageLanguageRequest {
    public PackageLanguagePathParams pathParams;
    public PackageLanguageRequest withPathParams(PackageLanguagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PackageLanguageQueryParams queryParams;
    public PackageLanguageRequest withQueryParams(PackageLanguageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}