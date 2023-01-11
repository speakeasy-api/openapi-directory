package openapisdk.models.operations;



public class StorageObjectAccessControlsDeleteRequest {
    public StorageObjectAccessControlsDeletePathParams pathParams;
    public StorageObjectAccessControlsDeleteRequest withPathParams(StorageObjectAccessControlsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectAccessControlsDeleteQueryParams queryParams;
    public StorageObjectAccessControlsDeleteRequest withQueryParams(StorageObjectAccessControlsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageObjectAccessControlsDeleteSecurity security;
    public StorageObjectAccessControlsDeleteRequest withSecurity(StorageObjectAccessControlsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}