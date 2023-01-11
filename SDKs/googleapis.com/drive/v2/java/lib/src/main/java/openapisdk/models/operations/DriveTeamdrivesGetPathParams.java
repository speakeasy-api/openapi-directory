package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveTeamdrivesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamDriveId")
    public String teamDriveId;
    public DriveTeamdrivesGetPathParams withTeamDriveId(String teamDriveId) {
        this.teamDriveId = teamDriveId;
        return this;
    }
}