package openapisdk.models.operations;



public class StorageBucketAccessControlsDeleteRequest {
    public StorageBucketAccessControlsDeletePathParams pathParams;
    public StorageBucketAccessControlsDeleteRequest withPathParams(StorageBucketAccessControlsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketAccessControlsDeleteQueryParams queryParams;
    public StorageBucketAccessControlsDeleteRequest withQueryParams(StorageBucketAccessControlsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageBucketAccessControlsDeleteSecurity security;
    public StorageBucketAccessControlsDeleteRequest withSecurity(StorageBucketAccessControlsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}