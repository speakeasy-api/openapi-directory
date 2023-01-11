package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest {
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams pathParams;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest withPathParams(NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams queryParams;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest withQueryParams(NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity security;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest withSecurity(NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity security) {
        this.security = security;
        return this;
    }
}