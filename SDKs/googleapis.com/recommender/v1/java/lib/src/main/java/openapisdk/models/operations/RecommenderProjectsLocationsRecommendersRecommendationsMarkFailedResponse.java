package openapisdk.models.operations;



public class RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse {
    public String contentType;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1Recommendation googleCloudRecommenderV1Recommendation;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse withGoogleCloudRecommenderV1Recommendation(openapisdk.models.shared.GoogleCloudRecommenderV1Recommendation googleCloudRecommenderV1Recommendation) {
        this.googleCloudRecommenderV1Recommendation = googleCloudRecommenderV1Recommendation;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}