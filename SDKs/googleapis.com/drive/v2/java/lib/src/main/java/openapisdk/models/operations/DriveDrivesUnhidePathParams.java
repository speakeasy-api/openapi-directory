package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesUnhidePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=driveId")
    public String driveId;
    public DriveDrivesUnhidePathParams withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
}