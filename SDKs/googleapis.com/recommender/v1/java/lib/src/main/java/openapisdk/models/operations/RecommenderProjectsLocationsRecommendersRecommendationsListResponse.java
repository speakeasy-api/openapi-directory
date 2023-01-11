package openapisdk.models.operations;



public class RecommenderProjectsLocationsRecommendersRecommendationsListResponse {
    public String contentType;
    public RecommenderProjectsLocationsRecommendersRecommendationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommenderV1ListRecommendationsResponse googleCloudRecommenderV1ListRecommendationsResponse;
    public RecommenderProjectsLocationsRecommendersRecommendationsListResponse withGoogleCloudRecommenderV1ListRecommendationsResponse(openapisdk.models.shared.GoogleCloudRecommenderV1ListRecommendationsResponse googleCloudRecommenderV1ListRecommendationsResponse) {
        this.googleCloudRecommenderV1ListRecommendationsResponse = googleCloudRecommenderV1ListRecommendationsResponse;
        return this;
    }
    public Long statusCode;
    public RecommenderProjectsLocationsRecommendersRecommendationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}