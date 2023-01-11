package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesListLabelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveFilesListLabelsPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}