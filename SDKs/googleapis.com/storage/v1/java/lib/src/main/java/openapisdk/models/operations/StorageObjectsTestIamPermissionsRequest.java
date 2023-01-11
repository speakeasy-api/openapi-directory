package openapisdk.models.operations;



public class StorageObjectsTestIamPermissionsRequest {
    public StorageObjectsTestIamPermissionsPathParams pathParams;
    public StorageObjectsTestIamPermissionsRequest withPathParams(StorageObjectsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsTestIamPermissionsQueryParams queryParams;
    public StorageObjectsTestIamPermissionsRequest withQueryParams(StorageObjectsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageObjectsTestIamPermissionsSecurity security;
    public StorageObjectsTestIamPermissionsRequest withSecurity(StorageObjectsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}