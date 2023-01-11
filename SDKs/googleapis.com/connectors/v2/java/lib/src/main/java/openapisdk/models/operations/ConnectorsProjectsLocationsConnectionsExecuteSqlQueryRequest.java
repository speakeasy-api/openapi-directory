package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest {
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryPathParams pathParams;
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest withPathParams(ConnectorsProjectsLocationsConnectionsExecuteSqlQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryQueryParams queryParams;
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest withQueryParams(ConnectorsProjectsLocationsConnectionsExecuteSqlQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecuteSqlQueryRequest request;
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest withRequest(openapisdk.models.shared.ExecuteSqlQueryRequest request) {
        this.request = request;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQuerySecurity security;
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryRequest withSecurity(ConnectorsProjectsLocationsConnectionsExecuteSqlQuerySecurity security) {
        this.security = security;
        return this;
    }
}