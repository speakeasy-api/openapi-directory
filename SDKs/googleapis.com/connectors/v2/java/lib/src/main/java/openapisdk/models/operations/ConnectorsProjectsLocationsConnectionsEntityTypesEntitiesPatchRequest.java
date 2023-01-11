package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest {
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams pathParams;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest withPathParams(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams queryParams;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest withQueryParams(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EntityInput request;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest withRequest(openapisdk.models.shared.EntityInput request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity security;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest withSecurity(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity security) {
        this.security = security;
        return this;
    }
}