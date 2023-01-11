package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest {
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest withPathParams(RecommendationengineProjectsLocationsCatalogsCatalogItemsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsCatalogItemsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest request;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity security;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest withSecurity(RecommendationengineProjectsLocationsCatalogsCatalogItemsImportSecurity security) {
        this.security = security;
        return this;
    }
}