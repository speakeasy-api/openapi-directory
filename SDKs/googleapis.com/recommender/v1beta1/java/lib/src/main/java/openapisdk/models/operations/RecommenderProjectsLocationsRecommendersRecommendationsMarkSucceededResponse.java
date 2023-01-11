package openapisdk.models.operations;



public class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse {
    public String contentType;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation googleCloudRecommenderV1beta1Recommendation;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse withGoogleCloudRecommenderV1beta1Recommendation(openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation googleCloudRecommenderV1beta1Recommendation) {
        this.googleCloudRecommenderV1beta1Recommendation = googleCloudRecommenderV1beta1Recommendation;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}