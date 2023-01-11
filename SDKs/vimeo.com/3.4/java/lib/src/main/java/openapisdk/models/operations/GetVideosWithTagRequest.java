package openapisdk.models.operations;



public class GetVideosWithTagRequest {
    public GetVideosWithTagPathParams pathParams;
    public GetVideosWithTagRequest withPathParams(GetVideosWithTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVideosWithTagQueryParams queryParams;
    public GetVideosWithTagRequest withQueryParams(GetVideosWithTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}