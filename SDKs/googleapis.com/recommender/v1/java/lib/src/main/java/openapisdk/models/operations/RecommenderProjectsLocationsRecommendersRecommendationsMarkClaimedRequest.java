package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest {
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedPathParams pathParams;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest withPathParams(RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedQueryParams queryParams;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest withQueryParams(RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommenderV1MarkRecommendationClaimedRequest request;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest withRequest(openapisdk.models.shared.GoogleCloudRecommenderV1MarkRecommendationClaimedRequest request) {
        this.request = request;
        return this;
    }
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity security;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest withSecurity(RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity security) {
        this.security = security;
        return this;
    }
}