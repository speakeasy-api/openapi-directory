package openapisdk.models.operations;



public class GetGroupVideosRequest {
    public GetGroupVideosPathParams pathParams;
    public GetGroupVideosRequest withPathParams(GetGroupVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGroupVideosQueryParams queryParams;
    public GetGroupVideosRequest withQueryParams(GetGroupVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}