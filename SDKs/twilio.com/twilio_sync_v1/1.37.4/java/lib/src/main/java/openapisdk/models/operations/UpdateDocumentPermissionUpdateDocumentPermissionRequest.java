package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDocumentPermissionUpdateDocumentPermissionRequest {
    @SpeakeasyMetadata("form:name=Manage")
    public Boolean manage;
    public UpdateDocumentPermissionUpdateDocumentPermissionRequest withManage(Boolean manage) {
        this.manage = manage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Read")
    public Boolean read;
    public UpdateDocumentPermissionUpdateDocumentPermissionRequest withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @SpeakeasyMetadata("form:name=Write")
    public Boolean write;
    public UpdateDocumentPermissionUpdateDocumentPermissionRequest withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}