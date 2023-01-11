package openapisdk.models.operations;



public class StorageProjectsHmacKeysGetRequest {
    public StorageProjectsHmacKeysGetPathParams pathParams;
    public StorageProjectsHmacKeysGetRequest withPathParams(StorageProjectsHmacKeysGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageProjectsHmacKeysGetQueryParams queryParams;
    public StorageProjectsHmacKeysGetRequest withQueryParams(StorageProjectsHmacKeysGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageProjectsHmacKeysGetSecurity security;
    public StorageProjectsHmacKeysGetRequest withSecurity(StorageProjectsHmacKeysGetSecurity security) {
        this.security = security;
        return this;
    }
}