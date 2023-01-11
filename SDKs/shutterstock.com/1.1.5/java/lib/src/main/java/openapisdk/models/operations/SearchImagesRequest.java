package openapisdk.models.operations;



public class SearchImagesRequest {
    public SearchImagesQueryParams queryParams;
    public SearchImagesRequest withQueryParams(SearchImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchImagesSecurity security;
    public SearchImagesRequest withSecurity(SearchImagesSecurity security) {
        this.security = security;
        return this;
    }
}