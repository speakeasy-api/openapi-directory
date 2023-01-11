package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetReference
 * A lightweight reference to the target of activity.
**/
public class TargetReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive")
    public DriveReference drive;
    public TargetReference withDrive(DriveReference drive) {
        this.drive = drive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveItem")
    public DriveItemReference driveItem;
    public TargetReference withDriveItem(DriveItemReference driveItem) {
        this.driveItem = driveItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDrive")
    public TeamDriveReference teamDrive;
    public TargetReference withTeamDrive(TeamDriveReference teamDrive) {
        this.teamDrive = teamDrive;
        return this;
    }
}