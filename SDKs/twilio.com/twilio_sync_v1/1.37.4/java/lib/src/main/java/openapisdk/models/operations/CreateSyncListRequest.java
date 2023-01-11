package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncListRequest {
    public String serverURL;
    public CreateSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSyncListPathParams pathParams;
    public CreateSyncListRequest withPathParams(CreateSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSyncListCreateSyncListRequest request;
    public CreateSyncListRequest withRequest(CreateSyncListCreateSyncListRequest request) {
        this.request = request;
        return this;
    }
    public CreateSyncListSecurity security;
    public CreateSyncListRequest withSecurity(CreateSyncListSecurity security) {
        this.security = security;
        return this;
    }
}