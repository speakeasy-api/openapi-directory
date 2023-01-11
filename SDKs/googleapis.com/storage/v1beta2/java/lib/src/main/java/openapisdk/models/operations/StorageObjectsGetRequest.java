package openapisdk.models.operations;



public class StorageObjectsGetRequest {
    public StorageObjectsGetPathParams pathParams;
    public StorageObjectsGetRequest withPathParams(StorageObjectsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageObjectsGetQueryParams queryParams;
    public StorageObjectsGetRequest withQueryParams(StorageObjectsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageObjectsGetSecurity security;
    public StorageObjectsGetRequest withSecurity(StorageObjectsGetSecurity security) {
        this.security = security;
        return this;
    }
}