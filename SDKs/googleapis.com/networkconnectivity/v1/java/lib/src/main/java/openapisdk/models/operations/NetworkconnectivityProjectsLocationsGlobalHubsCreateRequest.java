package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest {
    public NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams pathParams;
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest withPathParams(NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams queryParams;
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest withQueryParams(NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HubInput request;
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest withRequest(openapisdk.models.shared.HubInput request) {
        this.request = request;
        return this;
    }
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity security;
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest withSecurity(NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity security) {
        this.security = security;
        return this;
    }
}