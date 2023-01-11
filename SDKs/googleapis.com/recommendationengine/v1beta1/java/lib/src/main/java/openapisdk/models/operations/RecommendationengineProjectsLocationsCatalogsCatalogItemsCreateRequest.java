package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest {
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest withPathParams(RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem request;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity security;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest withSecurity(RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity security) {
        this.security = security;
        return this;
    }
}