package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncSyncListPermissionRequest {
    public String serverURL;
    public UpdateSyncSyncListPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncSyncListPermissionPathParams pathParams;
    public UpdateSyncSyncListPermissionRequest withPathParams(UpdateSyncSyncListPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest request;
    public UpdateSyncSyncListPermissionRequest withRequest(UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncSyncListPermissionSecurity security;
    public UpdateSyncSyncListPermissionRequest withSecurity(UpdateSyncSyncListPermissionSecurity security) {
        this.security = security;
        return this;
    }
}