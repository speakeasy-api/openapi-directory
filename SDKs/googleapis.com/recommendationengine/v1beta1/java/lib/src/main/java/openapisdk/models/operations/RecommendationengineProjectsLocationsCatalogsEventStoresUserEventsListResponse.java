package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse googleCloudRecommendationengineV1beta1ListUserEventsResponse;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse withGoogleCloudRecommendationengineV1beta1ListUserEventsResponse(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse googleCloudRecommendationengineV1beta1ListUserEventsResponse) {
        this.googleCloudRecommendationengineV1beta1ListUserEventsResponse = googleCloudRecommendationengineV1beta1ListUserEventsResponse;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}