package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesDeletePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}