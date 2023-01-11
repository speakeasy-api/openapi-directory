package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Target
 * Information about the target of activity.
**/
public class Target {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive")
    public Drive drive;
    public Target withDrive(Drive drive) {
        this.drive = drive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveItem")
    public DriveItem driveItem;
    public Target withDriveItem(DriveItem driveItem) {
        this.driveItem = driveItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileComment")
    public FileComment fileComment;
    public Target withFileComment(FileComment fileComment) {
        this.fileComment = fileComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDrive")
    public TeamDrive teamDrive;
    public Target withTeamDrive(TeamDrive teamDrive) {
        this.teamDrive = teamDrive;
        return this;
    }
}