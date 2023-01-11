package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesModifyLabelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesModifyLabelsPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}