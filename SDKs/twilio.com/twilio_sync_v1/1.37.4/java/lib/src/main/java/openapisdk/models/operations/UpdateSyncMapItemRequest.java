package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncMapItemRequest {
    public String serverURL;
    public UpdateSyncMapItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncMapItemPathParams pathParams;
    public UpdateSyncMapItemRequest withPathParams(UpdateSyncMapItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSyncMapItemHeaders headers;
    public UpdateSyncMapItemRequest withHeaders(UpdateSyncMapItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncMapItemUpdateSyncMapItemRequest request;
    public UpdateSyncMapItemRequest withRequest(UpdateSyncMapItemUpdateSyncMapItemRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncMapItemSecurity security;
    public UpdateSyncMapItemRequest withSecurity(UpdateSyncMapItemSecurity security) {
        this.security = security;
        return this;
    }
}