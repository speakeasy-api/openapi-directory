package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChildrenInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=folderId")
    public String folderId;
    public DriveChildrenInsertPathParams withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
}