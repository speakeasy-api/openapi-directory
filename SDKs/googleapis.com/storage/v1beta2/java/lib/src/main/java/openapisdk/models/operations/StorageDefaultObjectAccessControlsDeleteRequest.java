package openapisdk.models.operations;



public class StorageDefaultObjectAccessControlsDeleteRequest {
    public StorageDefaultObjectAccessControlsDeletePathParams pathParams;
    public StorageDefaultObjectAccessControlsDeleteRequest withPathParams(StorageDefaultObjectAccessControlsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageDefaultObjectAccessControlsDeleteQueryParams queryParams;
    public StorageDefaultObjectAccessControlsDeleteRequest withQueryParams(StorageDefaultObjectAccessControlsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageDefaultObjectAccessControlsDeleteSecurity security;
    public StorageDefaultObjectAccessControlsDeleteRequest withSecurity(StorageDefaultObjectAccessControlsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}