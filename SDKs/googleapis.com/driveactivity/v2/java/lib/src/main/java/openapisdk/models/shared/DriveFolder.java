package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveFolder
 * A Drive item which is a folder.
**/
public class DriveFolder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DriveFolderTypeEnum type;
    public DriveFolder withType(DriveFolderTypeEnum type) {
        this.type = type;
        return this;
    }
}