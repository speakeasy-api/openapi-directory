package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsCreateRequest {
    public DatastreamProjectsLocationsStreamsCreatePathParams pathParams;
    public DatastreamProjectsLocationsStreamsCreateRequest withPathParams(DatastreamProjectsLocationsStreamsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsStreamsCreateQueryParams queryParams;
    public DatastreamProjectsLocationsStreamsCreateRequest withQueryParams(DatastreamProjectsLocationsStreamsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StreamInput request;
    public DatastreamProjectsLocationsStreamsCreateRequest withRequest(openapisdk.models.shared.StreamInput request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsStreamsCreateSecurity security;
    public DatastreamProjectsLocationsStreamsCreateRequest withSecurity(DatastreamProjectsLocationsStreamsCreateSecurity security) {
        this.security = security;
        return this;
    }
}