package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePermissionsUpdatePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permissionId")
    public String permissionId;
    public DrivePermissionsUpdatePathParams withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
}