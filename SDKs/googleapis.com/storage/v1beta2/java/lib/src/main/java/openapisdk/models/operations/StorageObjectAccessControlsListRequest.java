package openapisdk.models.operations;



public class StorageObjectAccessControlsListRequest {
    public StorageObjectAccessControlsListPathParams pathParams;
    public StorageObjectAccessControlsListRequest withPathParams(StorageObjectAccessControlsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectAccessControlsListQueryParams queryParams;
    public StorageObjectAccessControlsListRequest withQueryParams(StorageObjectAccessControlsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageObjectAccessControlsListSecurity security;
    public StorageObjectAccessControlsListRequest withSecurity(StorageObjectAccessControlsListSecurity security) {
        this.security = security;
        return this;
    }
}