package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse withGoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse) {
        this.googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse = googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}