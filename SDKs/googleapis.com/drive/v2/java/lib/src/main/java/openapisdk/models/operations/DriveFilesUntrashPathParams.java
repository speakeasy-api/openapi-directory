package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesUntrashPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesUntrashPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}