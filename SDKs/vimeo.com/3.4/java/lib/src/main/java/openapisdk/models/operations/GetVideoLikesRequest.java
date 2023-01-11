package openapisdk.models.operations;



public class GetVideoLikesRequest {
    public GetVideoLikesPathParams pathParams;
    public GetVideoLikesRequest withPathParams(GetVideoLikesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVideoLikesQueryParams queryParams;
    public GetVideoLikesRequest withQueryParams(GetVideoLikesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}