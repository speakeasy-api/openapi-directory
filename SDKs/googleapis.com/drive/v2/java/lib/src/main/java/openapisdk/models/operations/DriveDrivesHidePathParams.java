package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesHidePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=driveId")
    public String driveId;
    public DriveDrivesHidePathParams withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
}