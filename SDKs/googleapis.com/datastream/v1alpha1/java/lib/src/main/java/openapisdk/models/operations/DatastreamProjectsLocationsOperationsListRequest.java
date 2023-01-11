package openapisdk.models.operations;



public class DatastreamProjectsLocationsOperationsListRequest {
    public DatastreamProjectsLocationsOperationsListPathParams pathParams;
    public DatastreamProjectsLocationsOperationsListRequest withPathParams(DatastreamProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsOperationsListQueryParams queryParams;
    public DatastreamProjectsLocationsOperationsListRequest withQueryParams(DatastreamProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatastreamProjectsLocationsOperationsListSecurity security;
    public DatastreamProjectsLocationsOperationsListRequest withSecurity(DatastreamProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}