package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncListRequest {
    public String serverURL;
    public UpdateSyncListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncListPathParams pathParams;
    public UpdateSyncListRequest withPathParams(UpdateSyncListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncListUpdateSyncListRequest request;
    public UpdateSyncListRequest withRequest(UpdateSyncListUpdateSyncListRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncListSecurity security;
    public UpdateSyncListRequest withSecurity(UpdateSyncListSecurity security) {
        this.security = security;
        return this;
    }
}