package openapisdk.models.operations;



public class GetEpisodeRecommendationsRequest {
    public GetEpisodeRecommendationsPathParams pathParams;
    public GetEpisodeRecommendationsRequest withPathParams(GetEpisodeRecommendationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEpisodeRecommendationsQueryParams queryParams;
    public GetEpisodeRecommendationsRequest withQueryParams(GetEpisodeRecommendationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEpisodeRecommendationsHeaders headers;
    public GetEpisodeRecommendationsRequest withHeaders(GetEpisodeRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}