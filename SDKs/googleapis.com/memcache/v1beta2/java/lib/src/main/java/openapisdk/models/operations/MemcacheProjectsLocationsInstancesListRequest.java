package openapisdk.models.operations;



public class MemcacheProjectsLocationsInstancesListRequest {
    public MemcacheProjectsLocationsInstancesListPathParams pathParams;
    public MemcacheProjectsLocationsInstancesListRequest withPathParams(MemcacheProjectsLocationsInstancesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsInstancesListQueryParams queryParams;
    public MemcacheProjectsLocationsInstancesListRequest withQueryParams(MemcacheProjectsLocationsInstancesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MemcacheProjectsLocationsInstancesListSecurity security;
    public MemcacheProjectsLocationsInstancesListRequest withSecurity(MemcacheProjectsLocationsInstancesListSecurity security) {
        this.security = security;
        return this;
    }
}