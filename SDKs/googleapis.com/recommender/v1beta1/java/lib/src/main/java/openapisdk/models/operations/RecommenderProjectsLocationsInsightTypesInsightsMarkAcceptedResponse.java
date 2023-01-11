package openapisdk.models.operations;



public class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse {
    public String contentType;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1beta1Insight googleCloudRecommenderV1beta1Insight;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse withGoogleCloudRecommenderV1beta1Insight(openapisdk.models.shared.GoogleCloudRecommenderV1beta1Insight googleCloudRecommenderV1beta1Insight) {
        this.googleCloudRecommenderV1beta1Insight = googleCloudRecommenderV1beta1Insight;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}