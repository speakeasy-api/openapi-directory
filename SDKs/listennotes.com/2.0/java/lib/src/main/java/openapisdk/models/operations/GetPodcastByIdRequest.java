package openapisdk.models.operations;



public class GetPodcastByIdRequest {
    public GetPodcastByIdPathParams pathParams;
    public GetPodcastByIdRequest withPathParams(GetPodcastByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPodcastByIdQueryParams queryParams;
    public GetPodcastByIdRequest withQueryParams(GetPodcastByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPodcastByIdHeaders headers;
    public GetPodcastByIdRequest withHeaders(GetPodcastByIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}