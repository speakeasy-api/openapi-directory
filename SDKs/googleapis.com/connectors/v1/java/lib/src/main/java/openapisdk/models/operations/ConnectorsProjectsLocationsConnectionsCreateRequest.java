package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsCreateRequest {
    public ConnectorsProjectsLocationsConnectionsCreatePathParams pathParams;
    public ConnectorsProjectsLocationsConnectionsCreateRequest withPathParams(ConnectorsProjectsLocationsConnectionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsCreateQueryParams queryParams;
    public ConnectorsProjectsLocationsConnectionsCreateRequest withQueryParams(ConnectorsProjectsLocationsConnectionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionInput request;
    public ConnectorsProjectsLocationsConnectionsCreateRequest withRequest(openapisdk.models.shared.ConnectionInput request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsCreateSecurity security;
    public ConnectorsProjectsLocationsConnectionsCreateRequest withSecurity(ConnectorsProjectsLocationsConnectionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}