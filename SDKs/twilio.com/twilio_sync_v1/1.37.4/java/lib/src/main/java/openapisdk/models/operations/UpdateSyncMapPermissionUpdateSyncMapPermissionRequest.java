package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncMapPermissionUpdateSyncMapPermissionRequest {
    @SpeakeasyMetadata("form:name=Manage")
    public Boolean manage;
    public UpdateSyncMapPermissionUpdateSyncMapPermissionRequest withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Read")
    public Boolean read;
    public UpdateSyncMapPermissionUpdateSyncMapPermissionRequest withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @SpeakeasyMetadata("form:name=Write")
    public Boolean write;
    public UpdateSyncMapPermissionUpdateSyncMapPermissionRequest withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}