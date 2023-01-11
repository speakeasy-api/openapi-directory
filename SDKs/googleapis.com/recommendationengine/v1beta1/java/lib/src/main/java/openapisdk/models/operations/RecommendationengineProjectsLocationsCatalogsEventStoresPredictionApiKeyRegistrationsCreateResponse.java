package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse withGoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration) {
        this.googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration = googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}