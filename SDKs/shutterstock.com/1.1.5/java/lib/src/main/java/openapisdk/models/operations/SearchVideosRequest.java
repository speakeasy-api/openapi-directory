package openapisdk.models.operations;



public class SearchVideosRequest {
    public SearchVideosQueryParams queryParams;
    public SearchVideosRequest withQueryParams(SearchVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchVideosSecurity security;
    public SearchVideosRequest withSecurity(SearchVideosSecurity security) {
        this.security = security;
        return this;
    }
}