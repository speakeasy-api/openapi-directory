package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest {
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams pathParams;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest withPathParams(RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams queryParams;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest withQueryParams(RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommenderV1MarkInsightAcceptedRequest request;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest withRequest(openapisdk.models.shared.GoogleCloudRecommenderV1MarkInsightAcceptedRequest request) {
        this.request = request;
        return this;
    }
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity security;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest withSecurity(RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity security) {
        this.security = security;
        return this;
    }
}