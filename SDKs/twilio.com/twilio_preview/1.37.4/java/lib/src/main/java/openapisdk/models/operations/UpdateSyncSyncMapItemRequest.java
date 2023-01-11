package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncSyncMapItemRequest {
    public String serverURL;
    public UpdateSyncSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncSyncMapItemPathParams pathParams;
    public UpdateSyncSyncMapItemRequest withPathParams(UpdateSyncSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSyncSyncMapItemHeaders headers;
    public UpdateSyncSyncMapItemRequest withHeaders(UpdateSyncSyncMapItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest request;
    public UpdateSyncSyncMapItemRequest withRequest(UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncSyncMapItemSecurity security;
    public UpdateSyncSyncMapItemRequest withSecurity(UpdateSyncSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}