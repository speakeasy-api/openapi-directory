package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChildrenListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=folderId")
    public String folderId;
    public DriveChildrenListPathParams withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
}