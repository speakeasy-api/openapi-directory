package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveCommentsInsertPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}