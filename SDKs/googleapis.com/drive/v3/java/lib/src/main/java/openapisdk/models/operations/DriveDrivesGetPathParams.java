package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=driveId")
    public String driveId;
    public DriveDrivesGetPathParams withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
}