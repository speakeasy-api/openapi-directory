package openapisdk.models.operations;



public class RedisProjectsLocationsInstancesListRequest {
    public RedisProjectsLocationsInstancesListPathParams pathParams;
    public RedisProjectsLocationsInstancesListRequest withPathParams(RedisProjectsLocationsInstancesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsInstancesListQueryParams queryParams;
    public RedisProjectsLocationsInstancesListRequest withQueryParams(RedisProjectsLocationsInstancesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RedisProjectsLocationsInstancesListSecurity security;
    public RedisProjectsLocationsInstancesListRequest withSecurity(RedisProjectsLocationsInstancesListSecurity security) {
        this.security = security;
        return this;
    }
}