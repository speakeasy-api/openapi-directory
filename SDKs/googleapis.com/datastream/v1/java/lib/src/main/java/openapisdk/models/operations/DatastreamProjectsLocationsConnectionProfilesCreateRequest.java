package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsConnectionProfilesCreateRequest {
    public DatastreamProjectsLocationsConnectionProfilesCreatePathParams pathParams;
    public DatastreamProjectsLocationsConnectionProfilesCreateRequest withPathParams(DatastreamProjectsLocationsConnectionProfilesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsConnectionProfilesCreateQueryParams queryParams;
    public DatastreamProjectsLocationsConnectionProfilesCreateRequest withQueryParams(DatastreamProjectsLocationsConnectionProfilesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionProfileInput request;
    public DatastreamProjectsLocationsConnectionProfilesCreateRequest withRequest(openapisdk.models.shared.ConnectionProfileInput request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsConnectionProfilesCreateSecurity security;
    public DatastreamProjectsLocationsConnectionProfilesCreateRequest withSecurity(DatastreamProjectsLocationsConnectionProfilesCreateSecurity security) {
        this.security = security;
        return this;
    }
}