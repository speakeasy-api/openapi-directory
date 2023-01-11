package openapisdk.models.operations;



public class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse {
    public String contentType;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation googleCloudRecommenderV1beta1Recommendation;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse withGoogleCloudRecommenderV1beta1Recommendation(openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation googleCloudRecommenderV1beta1Recommendation) {
        this.googleCloudRecommenderV1beta1Recommendation = googleCloudRecommenderV1beta1Recommendation;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}