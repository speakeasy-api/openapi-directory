package openapisdk.models.operations;



public class StorageNotificationsListRequest {
    public StorageNotificationsListPathParams pathParams;
    public StorageNotificationsListRequest withPathParams(StorageNotificationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageNotificationsListQueryParams queryParams;
    public StorageNotificationsListRequest withQueryParams(StorageNotificationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageNotificationsListSecurity security;
    public StorageNotificationsListRequest withSecurity(StorageNotificationsListSecurity security) {
        this.security = security;
        return this;
    }
}