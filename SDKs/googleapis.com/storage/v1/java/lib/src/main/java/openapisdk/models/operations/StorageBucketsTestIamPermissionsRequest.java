package openapisdk.models.operations;



public class StorageBucketsTestIamPermissionsRequest {
    public StorageBucketsTestIamPermissionsPathParams pathParams;
    public StorageBucketsTestIamPermissionsRequest withPathParams(StorageBucketsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketsTestIamPermissionsQueryParams queryParams;
    public StorageBucketsTestIamPermissionsRequest withQueryParams(StorageBucketsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageBucketsTestIamPermissionsSecurity security;
    public StorageBucketsTestIamPermissionsRequest withSecurity(StorageBucketsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}