package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChildrenGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=childId")
    public String childId;
    public DriveChildrenGetPathParams withChildId(String childId) {
        this.childId = childId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=folderId")
    public String folderId;
    public DriveChildrenGetPathParams withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
}