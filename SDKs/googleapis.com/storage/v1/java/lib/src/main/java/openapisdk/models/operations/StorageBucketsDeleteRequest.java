package openapisdk.models.operations;



public class StorageBucketsDeleteRequest {
    public StorageBucketsDeletePathParams pathParams;
    public StorageBucketsDeleteRequest withPathParams(StorageBucketsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketsDeleteQueryParams queryParams;
    public StorageBucketsDeleteRequest withQueryParams(StorageBucketsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageBucketsDeleteSecurity security;
    public StorageBucketsDeleteRequest withSecurity(StorageBucketsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}