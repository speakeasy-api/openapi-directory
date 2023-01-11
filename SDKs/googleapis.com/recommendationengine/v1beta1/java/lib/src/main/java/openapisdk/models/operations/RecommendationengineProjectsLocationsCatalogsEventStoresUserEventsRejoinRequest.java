package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest {
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams pathParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest withPathParams(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams queryParams;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest withQueryParams(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest request;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest withRequest(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest request) {
        this.request = request;
        return this;
    }
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity security;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest withSecurity(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinSecurity security) {
        this.security = security;
        return this;
    }
}