package openapisdk.models.operations;



public class GetVodVideosRequest {
    public GetVodVideosPathParams pathParams;
    public GetVodVideosRequest withPathParams(GetVodVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVodVideosQueryParams queryParams;
    public GetVodVideosRequest withQueryParams(GetVodVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}