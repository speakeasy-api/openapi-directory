package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncListPermissionRequest {
    public String serverURL;
    public UpdateSyncListPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncListPermissionPathParams pathParams;
    public UpdateSyncListPermissionRequest withPathParams(UpdateSyncListPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncListPermissionUpdateSyncListPermissionRequest request;
    public UpdateSyncListPermissionRequest withRequest(UpdateSyncListPermissionUpdateSyncListPermissionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncListPermissionSecurity security;
    public UpdateSyncListPermissionRequest withSecurity(UpdateSyncListPermissionSecurity security) {
        this.security = security;
        return this;
    }
}