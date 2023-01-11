package openapisdk.models.operations;



public class DatastreamProjectsLocationsStreamsListRequest {
    public DatastreamProjectsLocationsStreamsListPathParams pathParams;
    public DatastreamProjectsLocationsStreamsListRequest withPathParams(DatastreamProjectsLocationsStreamsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsStreamsListQueryParams queryParams;
    public DatastreamProjectsLocationsStreamsListRequest withQueryParams(DatastreamProjectsLocationsStreamsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatastreamProjectsLocationsStreamsListSecurity security;
    public DatastreamProjectsLocationsStreamsListRequest withSecurity(DatastreamProjectsLocationsStreamsListSecurity security) {
        this.security = security;
        return this;
    }
}