package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest {
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams pathParams;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest withPathParams(NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams queryParams;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest withQueryParams(NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectivityTestInput request;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest withRequest(openapisdk.models.shared.ConnectivityTestInput request) {
        this.request = request;
        return this;
    }
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity security;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest withSecurity(NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity security) {
        this.security = security;
        return this;
    }
}