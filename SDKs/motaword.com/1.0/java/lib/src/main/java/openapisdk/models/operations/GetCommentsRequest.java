package openapisdk.models.operations;



public class GetCommentsRequest {
    public GetCommentsPathParams pathParams;
    public GetCommentsRequest withPathParams(GetCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCommentsQueryParams queryParams;
    public GetCommentsRequest withQueryParams(GetCommentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}