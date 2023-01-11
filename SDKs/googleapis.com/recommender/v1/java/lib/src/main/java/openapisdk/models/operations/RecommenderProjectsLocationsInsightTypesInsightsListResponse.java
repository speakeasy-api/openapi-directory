package openapisdk.models.operations;



public class RecommenderProjectsLocationsInsightTypesInsightsListResponse {
    public String contentType;
    public RecommenderProjectsLocationsInsightTypesInsightsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1ListInsightsResponse googleCloudRecommenderV1ListInsightsResponse;
    public RecommenderProjectsLocationsInsightTypesInsightsListResponse withGoogleCloudRecommenderV1ListInsightsResponse(openapisdk.models.shared.GoogleCloudRecommenderV1ListInsightsResponse googleCloudRecommenderV1ListInsightsResponse) {
        this.googleCloudRecommenderV1ListInsightsResponse = googleCloudRecommenderV1ListInsightsResponse;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsInsightTypesInsightsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}