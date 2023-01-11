package openapisdk.models.operations;



public class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse {
    public String contentType;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1Insight googleCloudRecommenderV1Insight;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse withGoogleCloudRecommenderV1Insight(openapisdk.models.shared.GoogleCloudRecommenderV1Insight googleCloudRecommenderV1Insight) {
        this.googleCloudRecommenderV1Insight = googleCloudRecommenderV1Insight;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}