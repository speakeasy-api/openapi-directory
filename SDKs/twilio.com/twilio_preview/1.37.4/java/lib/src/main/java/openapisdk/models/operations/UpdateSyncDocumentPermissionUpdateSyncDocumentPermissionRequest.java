package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest {
    @SpeakeasyMetadata("form:name=Manage")
    public Boolean manage;
    public UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Read")
    public Boolean read;
    public UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @SpeakeasyMetadata("form:name=Write")
    public Boolean write;
    public UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}