package openapisdk.models.operations;



public class MemcacheProjectsLocationsListRequest {
    public MemcacheProjectsLocationsListPathParams pathParams;
    public MemcacheProjectsLocationsListRequest withPathParams(MemcacheProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MemcacheProjectsLocationsListQueryParams queryParams;
    public MemcacheProjectsLocationsListRequest withQueryParams(MemcacheProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MemcacheProjectsLocationsListSecurity security;
    public MemcacheProjectsLocationsListRequest withSecurity(MemcacheProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}