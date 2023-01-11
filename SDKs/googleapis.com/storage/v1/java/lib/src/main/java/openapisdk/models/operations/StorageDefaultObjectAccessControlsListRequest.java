package openapisdk.models.operations;



public class StorageDefaultObjectAccessControlsListRequest {
    public StorageDefaultObjectAccessControlsListPathParams pathParams;
    public StorageDefaultObjectAccessControlsListRequest withPathParams(StorageDefaultObjectAccessControlsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageDefaultObjectAccessControlsListQueryParams queryParams;
    public StorageDefaultObjectAccessControlsListRequest withQueryParams(StorageDefaultObjectAccessControlsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageDefaultObjectAccessControlsListSecurity security;
    public StorageDefaultObjectAccessControlsListRequest withSecurity(StorageDefaultObjectAccessControlsListSecurity security) {
        this.security = security;
        return this;
    }
}