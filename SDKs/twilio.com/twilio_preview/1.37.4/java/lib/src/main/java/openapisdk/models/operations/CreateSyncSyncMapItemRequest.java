package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncSyncMapItemRequest {
    public String serverURL;
    public CreateSyncSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncSyncMapItemPathParams pathParams;
    public CreateSyncSyncMapItemRequest withPathParams(CreateSyncSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncSyncMapItemCreateSyncSyncMapItemRequest request;
    public CreateSyncSyncMapItemRequest withRequest(CreateSyncSyncMapItemCreateSyncSyncMapItemRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncSyncMapItemSecurity security;
    public CreateSyncSyncMapItemRequest withSecurity(CreateSyncSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}