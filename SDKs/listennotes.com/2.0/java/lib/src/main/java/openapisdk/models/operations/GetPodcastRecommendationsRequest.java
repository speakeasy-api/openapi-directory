package openapisdk.models.operations;



public class GetPodcastRecommendationsRequest {
    public GetPodcastRecommendationsPathParams pathParams;
    public GetPodcastRecommendationsRequest withPathParams(GetPodcastRecommendationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPodcastRecommendationsQueryParams queryParams;
    public GetPodcastRecommendationsRequest withQueryParams(GetPodcastRecommendationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPodcastRecommendationsHeaders headers;
    public GetPodcastRecommendationsRequest withHeaders(GetPodcastRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}