package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest {
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest withPathParams(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent request;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity security;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest withSecurity(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity security) {
        this.security = security;
        return this;
    }
}