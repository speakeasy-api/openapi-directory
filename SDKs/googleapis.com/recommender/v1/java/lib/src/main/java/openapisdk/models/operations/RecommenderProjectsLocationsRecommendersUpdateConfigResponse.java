package openapisdk.models.operations;



public class RecommenderProjectsLocationsRecommendersUpdateConfigResponse {
    public String contentType;
    public RecommenderProjectsLocationsRecommendersUpdateConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1RecommenderConfig googleCloudRecommenderV1RecommenderConfig;
    public RecommenderProjectsLocationsRecommendersUpdateConfigResponse withGoogleCloudRecommenderV1RecommenderConfig(openapisdk.models.shared.GoogleCloudRecommenderV1RecommenderConfig googleCloudRecommenderV1RecommenderConfig) {
        this.googleCloudRecommenderV1RecommenderConfig = googleCloudRecommenderV1RecommenderConfig;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsRecommendersUpdateConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}