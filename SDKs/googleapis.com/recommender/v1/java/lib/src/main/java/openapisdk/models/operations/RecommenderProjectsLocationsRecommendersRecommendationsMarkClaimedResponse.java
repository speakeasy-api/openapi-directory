package openapisdk.models.operations;



public class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse {
    public String contentType;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1Recommendation googleCloudRecommenderV1Recommendation;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse withGoogleCloudRecommenderV1Recommendation(openapisdk.models.shared.GoogleCloudRecommenderV1Recommendation googleCloudRecommenderV1Recommendation) {
        this.googleCloudRecommenderV1Recommendation = googleCloudRecommenderV1Recommendation;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}