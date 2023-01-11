package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest {
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest withPathParams(RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest request;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity security;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest withSecurity(RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}