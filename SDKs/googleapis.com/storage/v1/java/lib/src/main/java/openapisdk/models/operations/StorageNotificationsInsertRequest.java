package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageNotificationsInsertRequest {
    public StorageNotificationsInsertPathParams pathParams;
    public StorageNotificationsInsertRequest withPathParams(StorageNotificationsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageNotificationsInsertQueryParams queryParams;
    public StorageNotificationsInsertRequest withQueryParams(StorageNotificationsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Notification request;
    public StorageNotificationsInsertRequest withRequest(openapisdk.models.shared.Notification request) {
        this.request = request;
        return this;
    }
    public StorageNotificationsInsertSecurity security;
    public StorageNotificationsInsertRequest withSecurity(StorageNotificationsInsertSecurity security) {
        this.security = security;
        return this;
    }
}