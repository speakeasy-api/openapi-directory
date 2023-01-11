package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveCommentsListPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}