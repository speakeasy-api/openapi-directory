package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest {
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams pathParams;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest withPathParams(RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams queryParams;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest withQueryParams(RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommenderV1MarkRecommendationFailedRequest request;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest withRequest(openapisdk.models.shared.GoogleCloudRecommenderV1MarkRecommendationFailedRequest request) {
        this.request = request;
        return this;
    }
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity security;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest withSecurity(RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity security) {
        this.security = security;
        return this;
    }
}