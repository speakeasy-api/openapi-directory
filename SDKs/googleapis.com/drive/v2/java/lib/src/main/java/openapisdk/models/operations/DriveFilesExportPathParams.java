package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesExportPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}