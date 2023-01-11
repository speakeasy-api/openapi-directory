package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent googleCloudRecommendationengineV1beta1UserEvent;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse withGoogleCloudRecommendationengineV1beta1UserEvent(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent googleCloudRecommendationengineV1beta1UserEvent) {
        this.googleCloudRecommendationengineV1beta1UserEvent = googleCloudRecommendationengineV1beta1UserEvent;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}