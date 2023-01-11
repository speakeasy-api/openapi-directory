package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastreamProjectsLocationsPrivateConnectionsCreateRequest {
    public DatastreamProjectsLocationsPrivateConnectionsCreatePathParams pathParams;
    public DatastreamProjectsLocationsPrivateConnectionsCreateRequest withPathParams(DatastreamProjectsLocationsPrivateConnectionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams queryParams;
    public DatastreamProjectsLocationsPrivateConnectionsCreateRequest withQueryParams(DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PrivateConnectionInput request;
    public DatastreamProjectsLocationsPrivateConnectionsCreateRequest withRequest(openapisdk.models.shared.PrivateConnectionInput request) {
        this.request = request;
        return this;
    }
    public DatastreamProjectsLocationsPrivateConnectionsCreateSecurity security;
    public DatastreamProjectsLocationsPrivateConnectionsCreateRequest withSecurity(DatastreamProjectsLocationsPrivateConnectionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}