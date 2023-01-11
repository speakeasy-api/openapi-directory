package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest {
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchPathParams pathParams;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest withPathParams(NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchQueryParams queryParams;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest withQueryParams(NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectivityTestInput request;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest withRequest(openapisdk.models.shared.ConnectivityTestInput request) {
        this.request = request;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity security;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest withSecurity(NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity security) {
        this.security = security;
        return this;
    }
}