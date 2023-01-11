package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest {
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams pathParams;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest withPathParams(DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams queryParams;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest withQueryParams(DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaImportUserEventsRequest request;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest withRequest(openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaImportUserEventsRequest request) {
        this.request = request;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity security;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest withSecurity(DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity security) {
        this.security = security;
        return this;
    }
}