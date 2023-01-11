package openapisdk.models.operations;



public class DatastreamProjectsLocationsFetchStaticIpsRequest {
    public DatastreamProjectsLocationsFetchStaticIpsPathParams pathParams;
    public DatastreamProjectsLocationsFetchStaticIpsRequest withPathParams(DatastreamProjectsLocationsFetchStaticIpsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatastreamProjectsLocationsFetchStaticIpsQueryParams queryParams;
    public DatastreamProjectsLocationsFetchStaticIpsRequest withQueryParams(DatastreamProjectsLocationsFetchStaticIpsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DatastreamProjectsLocationsFetchStaticIpsSecurity security;
    public DatastreamProjectsLocationsFetchStaticIpsRequest withSecurity(DatastreamProjectsLocationsFetchStaticIpsSecurity security) {
        this.security = security;
        return this;
    }
}