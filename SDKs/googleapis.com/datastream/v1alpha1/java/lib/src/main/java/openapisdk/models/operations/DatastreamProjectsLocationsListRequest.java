package openapisdk.models.operations;



public class DatastreamProjectsLocationsListRequest {
    public DatastreamProjectsLocationsListPathParams pathParams;
    public DatastreamProjectsLocationsListRequest withPathParams(DatastreamProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsListQueryParams queryParams;
    public DatastreamProjectsLocationsListRequest withQueryParams(DatastreamProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatastreamProjectsLocationsListSecurity security;
    public DatastreamProjectsLocationsListRequest withSecurity(DatastreamProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}