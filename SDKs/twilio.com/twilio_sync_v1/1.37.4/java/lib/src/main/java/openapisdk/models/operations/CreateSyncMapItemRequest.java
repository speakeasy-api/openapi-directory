package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncMapItemRequest {
    public String serverURL;
    public CreateSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncMapItemPathParams pathParams;
    public CreateSyncMapItemRequest withPathParams(CreateSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncMapItemCreateSyncMapItemRequest request;
    public CreateSyncMapItemRequest withRequest(CreateSyncMapItemCreateSyncMapItemRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncMapItemSecurity security;
    public CreateSyncMapItemRequest withSecurity(CreateSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}