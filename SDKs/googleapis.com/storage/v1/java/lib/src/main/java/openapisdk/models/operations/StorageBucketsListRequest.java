package openapisdk.models.operations;



public class StorageBucketsListRequest {
    public StorageBucketsListQueryParams queryParams;
    public StorageBucketsListRequest withQueryParams(StorageBucketsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageBucketsListSecurity security;
    public StorageBucketsListRequest withSecurity(StorageBucketsListSecurity security) {
        this.security = security;
        return this;
    }
}