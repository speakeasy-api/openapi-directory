package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest {
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams pathParams;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest withPathParams(RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams queryParams;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest withQueryParams(RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommenderV1MarkRecommendationSucceededRequest request;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest withRequest(openapisdk.models.shared.GoogleCloudRecommenderV1MarkRecommendationSucceededRequest request) {
        this.request = request;
        return this;
    }
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity security;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest withSecurity(RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity security) {
        this.security = security;
        return this;
    }
}