package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest {
    public DatastreamProjectsLocationsPrivateConnectionsRoutesCreatePathParams pathParams;
    public DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest withPathParams(DatastreamProjectsLocationsPrivateConnectionsRoutesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsPrivateConnectionsRoutesCreateQueryParams queryParams;
    public DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest withQueryParams(DatastreamProjectsLocationsPrivateConnectionsRoutesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RouteInput request;
    public DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest withRequest(openapisdk.models.shared.RouteInput request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity security;
    public DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest withSecurity(DatastreamProjectsLocationsPrivateConnectionsRoutesCreateSecurity security) {
        this.security = security;
        return this;
    }
}