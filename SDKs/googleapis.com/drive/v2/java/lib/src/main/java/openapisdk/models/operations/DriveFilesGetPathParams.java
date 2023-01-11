package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesGetPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}