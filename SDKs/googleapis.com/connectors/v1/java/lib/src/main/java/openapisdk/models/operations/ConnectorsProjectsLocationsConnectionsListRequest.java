package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsListRequest {
    public ConnectorsProjectsLocationsConnectionsListPathParams pathParams;
    public ConnectorsProjectsLocationsConnectionsListRequest withPathParams(ConnectorsProjectsLocationsConnectionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsListQueryParams queryParams;
    public ConnectorsProjectsLocationsConnectionsListRequest withQueryParams(ConnectorsProjectsLocationsConnectionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ConnectorsProjectsLocationsConnectionsListSecurity security;
    public ConnectorsProjectsLocationsConnectionsListRequest withSecurity(ConnectorsProjectsLocationsConnectionsListSecurity security) {
        this.security = security;
        return this;
    }
}