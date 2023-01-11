package openapisdk.models.operations;



public class EndpointGetRecommendationsRequest {
    public EndpointGetRecommendationsQueryParams queryParams;
    public EndpointGetRecommendationsRequest withQueryParams(EndpointGetRecommendationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointGetRecommendationsHeaders headers;
    public EndpointGetRecommendationsRequest withHeaders(EndpointGetRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public EndpointGetRecommendationsSecurity security;
    public EndpointGetRecommendationsRequest withSecurity(EndpointGetRecommendationsSecurity security) {
        this.security = security;
        return this;
    }
}