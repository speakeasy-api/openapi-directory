package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncSyncListItemRequest {
    public String serverURL;
    public CreateSyncSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncSyncListItemPathParams pathParams;
    public CreateSyncSyncListItemRequest withPathParams(CreateSyncSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncSyncListItemCreateSyncSyncListItemRequest request;
    public CreateSyncSyncListItemRequest withRequest(CreateSyncSyncListItemCreateSyncSyncListItemRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncSyncListItemSecurity security;
    public CreateSyncSyncListItemRequest withSecurity(CreateSyncSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}