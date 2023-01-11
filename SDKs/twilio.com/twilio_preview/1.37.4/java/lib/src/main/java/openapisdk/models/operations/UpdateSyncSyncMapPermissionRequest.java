package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncSyncMapPermissionRequest {
    public String serverURL;
    public UpdateSyncSyncMapPermissionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSyncSyncMapPermissionPathParams pathParams;
    public UpdateSyncSyncMapPermissionRequest withPathParams(UpdateSyncSyncMapPermissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest request;
    public UpdateSyncSyncMapPermissionRequest withRequest(UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSyncSyncMapPermissionSecurity security;
    public UpdateSyncSyncMapPermissionRequest withSecurity(UpdateSyncSyncMapPermissionSecurity security) {
        this.security = security;
        return this;
    }
}