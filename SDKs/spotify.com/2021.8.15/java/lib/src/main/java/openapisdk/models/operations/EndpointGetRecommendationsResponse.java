package openapisdk.models.operations;



public class EndpointGetRecommendationsResponse {
    public String contentType;
    public EndpointGetRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetRecommendationsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.RecommendationsObject recommendationsObject;
    public EndpointGetRecommendationsResponse withRecommendationsObject(openapisdk.models.shared.RecommendationsObject recommendationsObject) {
        this.recommendationsObject = recommendationsObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}