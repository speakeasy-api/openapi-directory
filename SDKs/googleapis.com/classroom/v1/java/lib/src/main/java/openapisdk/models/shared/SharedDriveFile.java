package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SharedDriveFile
 * Drive file that is used as material for course work.
**/
public class SharedDriveFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFile")
    public DriveFile driveFile;
    public SharedDriveFile withDriveFile(DriveFile driveFile) {
        this.driveFile = driveFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareMode")
    public SharedDriveFileShareModeEnum shareMode;
    public SharedDriveFile withShareMode(SharedDriveFileShareModeEnum shareMode) {
        this.shareMode = shareMode;
        return this;
    }
}