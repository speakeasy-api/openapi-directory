package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=driveId")
    public String driveId;
    public DriveDrivesDeletePathParams withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
}