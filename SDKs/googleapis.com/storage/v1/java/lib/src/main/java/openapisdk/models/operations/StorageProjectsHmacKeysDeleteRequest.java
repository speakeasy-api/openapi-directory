package openapisdk.models.operations;



public class StorageProjectsHmacKeysDeleteRequest {
    public StorageProjectsHmacKeysDeletePathParams pathParams;
    public StorageProjectsHmacKeysDeleteRequest withPathParams(StorageProjectsHmacKeysDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageProjectsHmacKeysDeleteQueryParams queryParams;
    public StorageProjectsHmacKeysDeleteRequest withQueryParams(StorageProjectsHmacKeysDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageProjectsHmacKeysDeleteSecurity security;
    public StorageProjectsHmacKeysDeleteRequest withSecurity(StorageProjectsHmacKeysDeleteSecurity security) {
        this.security = security;
        return this;
    }
}