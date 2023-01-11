package openapisdk.models.operations;



public class SearchEditorialVideosRequest {
    public SearchEditorialVideosQueryParams queryParams;
    public SearchEditorialVideosRequest withQueryParams(SearchEditorialVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchEditorialVideosSecurity security;
    public SearchEditorialVideosRequest withSecurity(SearchEditorialVideosSecurity security) {
        this.security = security;
        return this;
    }
}