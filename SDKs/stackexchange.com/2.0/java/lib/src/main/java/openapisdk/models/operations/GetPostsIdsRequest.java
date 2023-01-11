package openapisdk.models.operations;



public class GetPostsIdsRequest {
    public GetPostsIdsPathParams pathParams;
    public GetPostsIdsRequest withPathParams(GetPostsIdsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPostsIdsQueryParams queryParams;
    public GetPostsIdsRequest withQueryParams(GetPostsIdsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}