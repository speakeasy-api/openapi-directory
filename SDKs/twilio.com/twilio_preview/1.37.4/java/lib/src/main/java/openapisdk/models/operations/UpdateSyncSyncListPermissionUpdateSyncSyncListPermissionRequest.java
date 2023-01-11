package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest {
    @SpeakeasyMetadata("form:name=Manage")
    public Boolean manage;
    public UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Read")
    public Boolean read;
    public UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @SpeakeasyMetadata("form:name=Write")
    public Boolean write;
    public UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}