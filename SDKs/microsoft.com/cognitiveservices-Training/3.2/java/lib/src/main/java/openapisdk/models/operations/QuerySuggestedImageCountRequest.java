package openapisdk.models.operations;



public class QuerySuggestedImageCountRequest {
    public QuerySuggestedImageCountPathParams pathParams;
    public QuerySuggestedImageCountRequest withPathParams(QuerySuggestedImageCountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public QuerySuggestedImageCountQueryParams queryParams;
    public QuerySuggestedImageCountRequest withQueryParams(QuerySuggestedImageCountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public QuerySuggestedImageCountRequests request;
    public QuerySuggestedImageCountRequest withRequest(QuerySuggestedImageCountRequests request) {
        this.request = request;
        return this;
    }
}