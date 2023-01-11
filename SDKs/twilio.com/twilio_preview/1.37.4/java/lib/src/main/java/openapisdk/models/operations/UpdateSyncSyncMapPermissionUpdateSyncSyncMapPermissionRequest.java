package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest {
    @SpeakeasyMetadata("form:name=Manage")
    public Boolean manage;
    public UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Read")
    public Boolean read;
    public UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @SpeakeasyMetadata("form:name=Write")
    public Boolean write;
    public UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}