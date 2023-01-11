package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePermissionsCreatePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}