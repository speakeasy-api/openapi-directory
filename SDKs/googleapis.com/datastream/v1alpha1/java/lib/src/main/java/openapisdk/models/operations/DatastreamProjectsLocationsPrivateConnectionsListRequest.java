package openapisdk.models.operations;



public class DatastreamProjectsLocationsPrivateConnectionsListRequest {
    public DatastreamProjectsLocationsPrivateConnectionsListPathParams pathParams;
    public DatastreamProjectsLocationsPrivateConnectionsListRequest withPathParams(DatastreamProjectsLocationsPrivateConnectionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsPrivateConnectionsListQueryParams queryParams;
    public DatastreamProjectsLocationsPrivateConnectionsListRequest withQueryParams(DatastreamProjectsLocationsPrivateConnectionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatastreamProjectsLocationsPrivateConnectionsListSecurity security;
    public DatastreamProjectsLocationsPrivateConnectionsListRequest withSecurity(DatastreamProjectsLocationsPrivateConnectionsListSecurity security) {
        this.security = security;
        return this;
    }
}