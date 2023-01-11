package openapisdk.models.operations;



public class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse {
    public String contentType;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1Recommendation googleCloudRecommenderV1Recommendation;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse withGoogleCloudRecommenderV1Recommendation(openapisdk.models.shared.GoogleCloudRecommenderV1Recommendation googleCloudRecommenderV1Recommendation) {
        this.googleCloudRecommenderV1Recommendation = googleCloudRecommenderV1Recommendation;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}