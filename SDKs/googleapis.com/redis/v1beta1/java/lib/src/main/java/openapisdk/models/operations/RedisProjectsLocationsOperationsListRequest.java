package openapisdk.models.operations;



public class RedisProjectsLocationsOperationsListRequest {
    public RedisProjectsLocationsOperationsListPathParams pathParams;
    public RedisProjectsLocationsOperationsListRequest withPathParams(RedisProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RedisProjectsLocationsOperationsListQueryParams queryParams;
    public RedisProjectsLocationsOperationsListRequest withQueryParams(RedisProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RedisProjectsLocationsOperationsListSecurity security;
    public RedisProjectsLocationsOperationsListRequest withSecurity(RedisProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}