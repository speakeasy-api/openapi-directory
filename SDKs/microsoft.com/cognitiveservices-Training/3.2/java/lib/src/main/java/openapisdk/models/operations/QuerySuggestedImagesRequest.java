package openapisdk.models.operations;



public class QuerySuggestedImagesRequest {
    public QuerySuggestedImagesPathParams pathParams;
    public QuerySuggestedImagesRequest withPathParams(QuerySuggestedImagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public QuerySuggestedImagesQueryParams queryParams;
    public QuerySuggestedImagesRequest withQueryParams(QuerySuggestedImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public QuerySuggestedImagesRequests request;
    public QuerySuggestedImagesRequest withRequest(QuerySuggestedImagesRequests request) {
        this.request = request;
        return this;
    }
}