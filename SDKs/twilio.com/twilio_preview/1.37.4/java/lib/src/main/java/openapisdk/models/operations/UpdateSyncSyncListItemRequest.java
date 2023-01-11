package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncSyncListItemRequest {
    public String serverURL;
    public UpdateSyncSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncSyncListItemPathParams pathParams;
    public UpdateSyncSyncListItemRequest withPathParams(UpdateSyncSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSyncSyncListItemHeaders headers;
    public UpdateSyncSyncListItemRequest withHeaders(UpdateSyncSyncListItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncSyncListItemUpdateSyncSyncListItemRequest request;
    public UpdateSyncSyncListItemRequest withRequest(UpdateSyncSyncListItemUpdateSyncSyncListItemRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncSyncListItemSecurity security;
    public UpdateSyncSyncListItemRequest withSecurity(UpdateSyncSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}