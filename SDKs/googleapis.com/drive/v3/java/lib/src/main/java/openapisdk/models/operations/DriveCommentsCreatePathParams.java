package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveCommentsCreatePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}