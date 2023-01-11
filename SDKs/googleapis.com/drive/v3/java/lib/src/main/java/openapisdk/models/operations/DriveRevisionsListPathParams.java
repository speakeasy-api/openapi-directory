package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRevisionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveRevisionsListPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}