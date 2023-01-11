package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncSyncListRequest {
    public String serverURL;
    public CreateSyncSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncSyncListPathParams pathParams;
    public CreateSyncSyncListRequest withPathParams(CreateSyncSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncSyncListCreateSyncSyncListRequest request;
    public CreateSyncSyncListRequest withRequest(CreateSyncSyncListCreateSyncSyncListRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncSyncListSecurity security;
    public CreateSyncSyncListRequest withSecurity(CreateSyncSyncListSecurity security) {
        this.security = security;
        return this;
    }
}