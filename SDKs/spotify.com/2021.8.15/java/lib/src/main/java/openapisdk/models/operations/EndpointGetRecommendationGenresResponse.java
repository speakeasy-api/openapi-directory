package openapisdk.models.operations;



public class EndpointGetRecommendationGenresResponse {
    public String contentType;
    public EndpointGetRecommendationGenresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetRecommendationGenresResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.GenreSeedsObject genreSeedsObject;
    public EndpointGetRecommendationGenresResponse withGenreSeedsObject(openapisdk.models.shared.GenreSeedsObject genreSeedsObject) {
        this.genreSeedsObject = genreSeedsObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetRecommendationGenresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}