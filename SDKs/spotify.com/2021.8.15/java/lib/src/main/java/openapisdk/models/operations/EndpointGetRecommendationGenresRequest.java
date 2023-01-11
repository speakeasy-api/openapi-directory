package openapisdk.models.operations;



public class EndpointGetRecommendationGenresRequest {
    public EndpointGetRecommendationGenresHeaders headers;
    public EndpointGetRecommendationGenresRequest withHeaders(EndpointGetRecommendationGenresHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetRecommendationGenresSecurity security;
    public EndpointGetRecommendationGenresRequest withSecurity(EndpointGetRecommendationGenresSecurity security) {
        this.security = security;
        return this;
    }
}