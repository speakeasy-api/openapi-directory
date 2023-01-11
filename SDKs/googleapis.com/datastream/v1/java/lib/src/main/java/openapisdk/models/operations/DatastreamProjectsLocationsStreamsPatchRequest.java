package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsStreamsPatchRequest {
    public DatastreamProjectsLocationsStreamsPatchPathParams pathParams;
    public DatastreamProjectsLocationsStreamsPatchRequest withPathParams(DatastreamProjectsLocationsStreamsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsStreamsPatchQueryParams queryParams;
    public DatastreamProjectsLocationsStreamsPatchRequest withQueryParams(DatastreamProjectsLocationsStreamsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StreamInput request;
    public DatastreamProjectsLocationsStreamsPatchRequest withRequest(openapisdk.models.shared.StreamInput request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsStreamsPatchSecurity security;
    public DatastreamProjectsLocationsStreamsPatchRequest withSecurity(DatastreamProjectsLocationsStreamsPatchSecurity security) {
        this.security = security;
        return this;
    }
}