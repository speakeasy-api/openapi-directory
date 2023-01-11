package openapisdk.models.operations;



public class StorageBucketsGetRequest {
    public StorageBucketsGetPathParams pathParams;
    public StorageBucketsGetRequest withPathParams(StorageBucketsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketsGetQueryParams queryParams;
    public StorageBucketsGetRequest withQueryParams(StorageBucketsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageBucketsGetSecurity security;
    public StorageBucketsGetRequest withSecurity(StorageBucketsGetSecurity security) {
        this.security = security;
        return this;
    }
}