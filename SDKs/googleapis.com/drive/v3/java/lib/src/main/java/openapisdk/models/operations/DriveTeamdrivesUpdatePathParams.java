package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveTeamdrivesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamDriveId")
    public String teamDriveId;
    public DriveTeamdrivesUpdatePathParams withTeamDriveId(String teamDriveId) {
        this.teamDriveId = teamDriveId;
        return this;
    }
}