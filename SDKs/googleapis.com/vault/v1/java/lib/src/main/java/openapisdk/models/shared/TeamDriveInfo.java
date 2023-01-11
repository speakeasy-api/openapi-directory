package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamDriveInfo
 * Team Drives to search
**/
public class TeamDriveInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDriveIds")
    public String[] teamDriveIds;
    public TeamDriveInfo withTeamDriveIds(String[] teamDriveIds) {
        this.teamDriveIds = teamDriveIds;
        return this;
    }
}