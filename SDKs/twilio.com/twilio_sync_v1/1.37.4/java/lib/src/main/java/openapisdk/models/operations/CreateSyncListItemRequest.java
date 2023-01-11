package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncListItemRequest {
    public String serverURL;
    public CreateSyncListItemRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncListItemPathParams pathParams;
    public CreateSyncListItemRequest withPathParams(CreateSyncListItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncListItemCreateSyncListItemRequest request;
    public CreateSyncListItemRequest withRequest(CreateSyncListItemCreateSyncListItemRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncListItemSecurity security;
    public CreateSyncListItemRequest withSecurity(CreateSyncListItemSecurity security) {
        this.security = security;
        return this;
    }
}