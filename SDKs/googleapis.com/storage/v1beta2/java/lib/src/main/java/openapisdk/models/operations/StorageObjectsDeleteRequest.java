package openapisdk.models.operations;



public class StorageObjectsDeleteRequest {
    public StorageObjectsDeletePathParams pathParams;
    public StorageObjectsDeleteRequest withPathParams(StorageObjectsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsDeleteQueryParams queryParams;
    public StorageObjectsDeleteRequest withQueryParams(StorageObjectsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageObjectsDeleteSecurity security;
    public StorageObjectsDeleteRequest withSecurity(StorageObjectsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}