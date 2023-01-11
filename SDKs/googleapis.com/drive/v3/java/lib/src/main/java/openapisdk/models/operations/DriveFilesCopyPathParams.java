package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesCopyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesCopyPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}