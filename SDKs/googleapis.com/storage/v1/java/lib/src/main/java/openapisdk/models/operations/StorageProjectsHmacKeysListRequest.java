package openapisdk.models.operations;



public class StorageProjectsHmacKeysListRequest {
    public StorageProjectsHmacKeysListPathParams pathParams;
    public StorageProjectsHmacKeysListRequest withPathParams(StorageProjectsHmacKeysListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageProjectsHmacKeysListQueryParams queryParams;
    public StorageProjectsHmacKeysListRequest withQueryParams(StorageProjectsHmacKeysListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageProjectsHmacKeysListSecurity security;
    public StorageProjectsHmacKeysListRequest withSecurity(StorageProjectsHmacKeysListSecurity security) {
        this.security = security;
        return this;
    }
}