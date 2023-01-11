package openapisdk.models.operations;



public class SearchEditorialImagesRequest {
    public SearchEditorialImagesQueryParams queryParams;
    public SearchEditorialImagesRequest withQueryParams(SearchEditorialImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchEditorialImagesSecurity security;
    public SearchEditorialImagesRequest withSecurity(SearchEditorialImagesSecurity security) {
        this.security = security;
        return this;
    }
}