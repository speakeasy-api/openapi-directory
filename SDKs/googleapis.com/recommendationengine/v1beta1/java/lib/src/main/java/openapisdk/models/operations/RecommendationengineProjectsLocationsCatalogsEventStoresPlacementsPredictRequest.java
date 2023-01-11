package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest {
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest withPathParams(RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictRequest request;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictRequest request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity security;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest withSecurity(RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity security) {
        this.security = security;
        return this;
    }
}