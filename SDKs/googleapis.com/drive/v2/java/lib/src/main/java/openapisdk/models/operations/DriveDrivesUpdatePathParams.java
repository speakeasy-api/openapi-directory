package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=driveId")
    public String driveId;
    public DriveDrivesUpdatePathParams withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
}