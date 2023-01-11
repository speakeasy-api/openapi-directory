package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest {
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportPathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest withPathParams(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest request;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportSecurity security;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest withSecurity(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportSecurity security) {
        this.security = security;
        return this;
    }
}