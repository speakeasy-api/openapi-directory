package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesWatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesWatchPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}