package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsConnectionProfilesDiscoverRequest {
    public DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams pathParams;
    public DatastreamProjectsLocationsConnectionProfilesDiscoverRequest withPathParams(DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams queryParams;
    public DatastreamProjectsLocationsConnectionProfilesDiscoverRequest withQueryParams(DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiscoverConnectionProfileRequestInput request;
    public DatastreamProjectsLocationsConnectionProfilesDiscoverRequest withRequest(openapisdk.models.shared.DiscoverConnectionProfileRequestInput request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity security;
    public DatastreamProjectsLocationsConnectionProfilesDiscoverRequest withSecurity(DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity security) {
        this.security = security;
        return this;
    }
}