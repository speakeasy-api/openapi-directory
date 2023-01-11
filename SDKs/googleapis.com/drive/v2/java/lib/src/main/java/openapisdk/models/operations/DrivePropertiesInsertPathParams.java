package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePropertiesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DrivePropertiesInsertPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}