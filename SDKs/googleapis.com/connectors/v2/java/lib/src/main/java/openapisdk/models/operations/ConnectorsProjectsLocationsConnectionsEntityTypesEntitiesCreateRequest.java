package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest {
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreatePathParams pathParams;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest withPathParams(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateQueryParams queryParams;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest withQueryParams(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityInput request;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest withRequest(openapisdk.models.shared.EntityInput request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity security;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest withSecurity(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateSecurity security) {
        this.security = security;
        return this;
    }
}