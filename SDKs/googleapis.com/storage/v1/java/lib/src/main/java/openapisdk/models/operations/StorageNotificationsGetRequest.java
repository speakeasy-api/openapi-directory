package openapisdk.models.operations;



public class StorageNotificationsGetRequest {
    public StorageNotificationsGetPathParams pathParams;
    public StorageNotificationsGetRequest withPathParams(StorageNotificationsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageNotificationsGetQueryParams queryParams;
    public StorageNotificationsGetRequest withQueryParams(StorageNotificationsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageNotificationsGetSecurity security;
    public StorageNotificationsGetRequest withSecurity(StorageNotificationsGetSecurity security) {
        this.security = security;
        return this;
    }
}