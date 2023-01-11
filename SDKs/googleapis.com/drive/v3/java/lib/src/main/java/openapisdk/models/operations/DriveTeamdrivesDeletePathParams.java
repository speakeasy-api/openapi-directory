package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveTeamdrivesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=teamDriveId")
    public String teamDriveId;
    public DriveTeamdrivesDeletePathParams withTeamDriveId(String teamDriveId) {
        this.teamDriveId = teamDriveId;
        return this;
    }
}