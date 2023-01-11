package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveParentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveParentsDeletePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parentId")
    public String parentId;
    public DriveParentsDeletePathParams withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
}