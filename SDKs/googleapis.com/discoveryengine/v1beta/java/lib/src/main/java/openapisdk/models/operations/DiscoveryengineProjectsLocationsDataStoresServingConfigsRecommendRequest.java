package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest {
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams pathParams;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest withPathParams(DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams queryParams;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest withQueryParams(DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaRecommendRequest request;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest withRequest(openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaRecommendRequest request) {
        this.request = request;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity security;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest withSecurity(DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity security) {
        this.security = security;
        return this;
    }
}