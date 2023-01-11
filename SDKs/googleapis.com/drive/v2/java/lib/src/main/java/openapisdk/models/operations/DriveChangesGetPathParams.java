package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChangesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeId")
    public String changeId;
    public DriveChangesGetPathParams withChangeId(String changeId) {
        this.changeId = changeId;
        return this;
    }
}