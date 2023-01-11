package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveParentsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveParentsInsertPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}