package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest {
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgePathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest withPathParams(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest request;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeSecurity security;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest withSecurity(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeSecurity security) {
        this.security = security;
        return this;
    }
}