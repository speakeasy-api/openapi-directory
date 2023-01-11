package openapisdk.models.operations;



public class StorageProjectsHmacKeysCreateRequest {
    public StorageProjectsHmacKeysCreatePathParams pathParams;
    public StorageProjectsHmacKeysCreateRequest withPathParams(StorageProjectsHmacKeysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageProjectsHmacKeysCreateQueryParams queryParams;
    public StorageProjectsHmacKeysCreateRequest withQueryParams(StorageProjectsHmacKeysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageProjectsHmacKeysCreateSecurity security;
    public StorageProjectsHmacKeysCreateRequest withSecurity(StorageProjectsHmacKeysCreateSecurity security) {
        this.security = security;
        return this;
    }
}