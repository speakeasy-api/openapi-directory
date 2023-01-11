package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePermissionsListPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}