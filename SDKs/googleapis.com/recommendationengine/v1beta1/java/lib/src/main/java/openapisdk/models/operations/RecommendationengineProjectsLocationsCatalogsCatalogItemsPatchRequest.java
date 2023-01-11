package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest {
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest withPathParams(RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem request;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity security;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest withSecurity(RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity security) {
        this.security = security;
        return this;
    }
}