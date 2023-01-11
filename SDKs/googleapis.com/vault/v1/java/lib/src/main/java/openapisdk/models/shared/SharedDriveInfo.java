package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SharedDriveInfo
 * The shared drives to search
**/
public class SharedDriveInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedDriveIds")
    public String[] sharedDriveIds;
    public SharedDriveInfo withSharedDriveIds(String[] sharedDriveIds) {
        this.sharedDriveIds = sharedDriveIds;
        return this;
    }
}