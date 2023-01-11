package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest {
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams pathParams;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest withPathParams(DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams queryParams;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest withQueryParams(DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaUserEvent request;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest withRequest(openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaUserEvent request) {
        this.request = request;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity security;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest withSecurity(DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity security) {
        this.security = security;
        return this;
    }
}