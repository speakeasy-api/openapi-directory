package openapisdk.models.operations;



public class StorageBucketAccessControlsGetRequest {
    public StorageBucketAccessControlsGetPathParams pathParams;
    public StorageBucketAccessControlsGetRequest withPathParams(StorageBucketAccessControlsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketAccessControlsGetQueryParams queryParams;
    public StorageBucketAccessControlsGetRequest withQueryParams(StorageBucketAccessControlsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageBucketAccessControlsGetSecurity security;
    public StorageBucketAccessControlsGetRequest withSecurity(StorageBucketAccessControlsGetSecurity security) {
        this.security = security;
        return this;
    }
}