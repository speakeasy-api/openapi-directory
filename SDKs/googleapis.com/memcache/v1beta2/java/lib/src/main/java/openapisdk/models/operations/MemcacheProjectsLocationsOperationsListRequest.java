package openapisdk.models.operations;



public class MemcacheProjectsLocationsOperationsListRequest {
    public MemcacheProjectsLocationsOperationsListPathParams pathParams;
    public MemcacheProjectsLocationsOperationsListRequest withPathParams(MemcacheProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsOperationsListQueryParams queryParams;
    public MemcacheProjectsLocationsOperationsListRequest withQueryParams(MemcacheProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MemcacheProjectsLocationsOperationsListSecurity security;
    public MemcacheProjectsLocationsOperationsListRequest withSecurity(MemcacheProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}