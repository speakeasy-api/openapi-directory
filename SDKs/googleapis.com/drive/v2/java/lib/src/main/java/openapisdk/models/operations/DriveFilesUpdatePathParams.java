package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesUpdatePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}