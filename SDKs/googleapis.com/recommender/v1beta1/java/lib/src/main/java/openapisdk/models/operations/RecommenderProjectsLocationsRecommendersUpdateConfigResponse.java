package openapisdk.models.operations;



public class RecommenderProjectsLocationsRecommendersUpdateConfigResponse {
    public String contentType;
    public RecommenderProjectsLocationsRecommendersUpdateConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1beta1RecommenderConfig googleCloudRecommenderV1beta1RecommenderConfig;
    public RecommenderProjectsLocationsRecommendersUpdateConfigResponse withGoogleCloudRecommenderV1beta1RecommenderConfig(openapisdk.models.shared.GoogleCloudRecommenderV1beta1RecommenderConfig googleCloudRecommenderV1beta1RecommenderConfig) {
        this.googleCloudRecommenderV1beta1RecommenderConfig = googleCloudRecommenderV1beta1RecommenderConfig;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsRecommendersUpdateConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}