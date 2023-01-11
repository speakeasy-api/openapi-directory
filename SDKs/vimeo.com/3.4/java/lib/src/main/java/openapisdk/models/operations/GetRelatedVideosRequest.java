package openapisdk.models.operations;



public class GetRelatedVideosRequest {
    public GetRelatedVideosPathParams pathParams;
    public GetRelatedVideosRequest withPathParams(GetRelatedVideosPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRelatedVideosQueryParams queryParams;
    public GetRelatedVideosRequest withQueryParams(GetRelatedVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}