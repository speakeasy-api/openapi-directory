package openapisdk.models.operations;



public class StorageObjectsListRequest {
    public StorageObjectsListPathParams pathParams;
    public StorageObjectsListRequest withPathParams(StorageObjectsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsListQueryParams queryParams;
    public StorageObjectsListRequest withQueryParams(StorageObjectsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageObjectsListSecurity security;
    public StorageObjectsListRequest withSecurity(StorageObjectsListSecurity security) {
        this.security = security;
        return this;
    }
}