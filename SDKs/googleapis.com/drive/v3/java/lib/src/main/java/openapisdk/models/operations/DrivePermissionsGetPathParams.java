package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePermissionsGetPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permissionId")
    public String permissionId;
    public DrivePermissionsGetPathParams withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
}