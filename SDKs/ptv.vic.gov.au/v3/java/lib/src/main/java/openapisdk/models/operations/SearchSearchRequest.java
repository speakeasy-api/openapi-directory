package openapisdk.models.operations;



public class SearchSearchRequest {
    public SearchSearchPathParams pathParams;
    public SearchSearchRequest withPathParams(SearchSearchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SearchSearchQueryParams queryParams;
    public SearchSearchRequest withQueryParams(SearchSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}