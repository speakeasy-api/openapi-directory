package openapisdk.models.operations;



public class RedisProjectsLocationsListRequest {
    public RedisProjectsLocationsListPathParams pathParams;
    public RedisProjectsLocationsListRequest withPathParams(RedisProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsListQueryParams queryParams;
    public RedisProjectsLocationsListRequest withQueryParams(RedisProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RedisProjectsLocationsListSecurity security;
    public RedisProjectsLocationsListRequest withSecurity(RedisProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}