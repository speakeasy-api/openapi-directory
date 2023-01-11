package openapisdk.models.operations;



public class GetVideosRequest {
    public GetVideosPathParams pathParams;
    public GetVideosRequest withPathParams(GetVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVideosQueryParams queryParams;
    public GetVideosRequest withQueryParams(GetVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}