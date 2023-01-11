package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncMapPermissionRequest {
    public String serverURL;
    public UpdateSyncMapPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncMapPermissionPathParams pathParams;
    public UpdateSyncMapPermissionRequest withPathParams(UpdateSyncMapPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncMapPermissionUpdateSyncMapPermissionRequest request;
    public UpdateSyncMapPermissionRequest withRequest(UpdateSyncMapPermissionUpdateSyncMapPermissionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncMapPermissionSecurity security;
    public UpdateSyncMapPermissionRequest withSecurity(UpdateSyncMapPermissionSecurity security) {
        this.security = security;
        return this;
    }
}