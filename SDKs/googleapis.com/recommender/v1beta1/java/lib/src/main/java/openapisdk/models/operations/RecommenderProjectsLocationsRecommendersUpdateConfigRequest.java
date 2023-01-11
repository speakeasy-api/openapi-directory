package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersUpdateConfigRequest {
    public RecommenderProjectsLocationsRecommendersUpdateConfigPathParams pathParams;
    public RecommenderProjectsLocationsRecommendersUpdateConfigRequest withPathParams(RecommenderProjectsLocationsRecommendersUpdateConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams queryParams;
    public RecommenderProjectsLocationsRecommendersUpdateConfigRequest withQueryParams(RecommenderProjectsLocationsRecommendersUpdateConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecommenderV1beta1RecommenderConfigInput request;
    public RecommenderProjectsLocationsRecommendersUpdateConfigRequest withRequest(openapisdk.models.shared.GoogleCloudRecommenderV1beta1RecommenderConfigInput request) {
        this.request = request;
        return this;
    }
    public RecommenderProjectsLocationsRecommendersUpdateConfigSecurity security;
    public RecommenderProjectsLocationsRecommendersUpdateConfigRequest withSecurity(RecommenderProjectsLocationsRecommendersUpdateConfigSecurity security) {
        this.security = security;
        return this;
    }
}