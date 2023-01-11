package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncDocumentPermissionRequest {
    public String serverURL;
    public UpdateSyncDocumentPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncDocumentPermissionPathParams pathParams;
    public UpdateSyncDocumentPermissionRequest withPathParams(UpdateSyncDocumentPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest request;
    public UpdateSyncDocumentPermissionRequest withRequest(UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncDocumentPermissionSecurity security;
    public UpdateSyncDocumentPermissionRequest withSecurity(UpdateSyncDocumentPermissionSecurity security) {
        this.security = security;
        return this;
    }
}