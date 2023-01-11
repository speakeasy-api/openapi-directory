package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsObjectsLookupRequest {
    public DatastreamProjectsLocationsStreamsObjectsLookupPathParams pathParams;
    public DatastreamProjectsLocationsStreamsObjectsLookupRequest withPathParams(DatastreamProjectsLocationsStreamsObjectsLookupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsStreamsObjectsLookupQueryParams queryParams;
    public DatastreamProjectsLocationsStreamsObjectsLookupRequest withQueryParams(DatastreamProjectsLocationsStreamsObjectsLookupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LookupStreamObjectRequest request;
    public DatastreamProjectsLocationsStreamsObjectsLookupRequest withRequest(openapisdk.models.shared.LookupStreamObjectRequest request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsStreamsObjectsLookupSecurity security;
    public DatastreamProjectsLocationsStreamsObjectsLookupRequest withSecurity(DatastreamProjectsLocationsStreamsObjectsLookupSecurity security) {
        this.security = security;
        return this;
    }
}