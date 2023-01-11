package openapisdk.models.operations;



public class StorageNotificationsDeleteRequest {
    public StorageNotificationsDeletePathParams pathParams;
    public StorageNotificationsDeleteRequest withPathParams(StorageNotificationsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageNotificationsDeleteQueryParams queryParams;
    public StorageNotificationsDeleteRequest withQueryParams(StorageNotificationsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageNotificationsDeleteSecurity security;
    public StorageNotificationsDeleteRequest withSecurity(StorageNotificationsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}