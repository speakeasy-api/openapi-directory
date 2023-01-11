package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncListItemRequest {
    public String serverURL;
    public UpdateSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncListItemPathParams pathParams;
    public UpdateSyncListItemRequest withPathParams(UpdateSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSyncListItemHeaders headers;
    public UpdateSyncListItemRequest withHeaders(UpdateSyncListItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncListItemUpdateSyncListItemRequest request;
    public UpdateSyncListItemRequest withRequest(UpdateSyncListItemUpdateSyncListItemRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncListItemSecurity security;
    public UpdateSyncListItemRequest withSecurity(UpdateSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}