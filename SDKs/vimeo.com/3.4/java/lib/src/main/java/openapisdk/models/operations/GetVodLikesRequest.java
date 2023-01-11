package openapisdk.models.operations;



public class GetVodLikesRequest {
    public GetVodLikesPathParams pathParams;
    public GetVodLikesRequest withPathParams(GetVodLikesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVodLikesQueryParams queryParams;
    public GetVodLikesRequest withQueryParams(GetVodLikesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}