package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Owner
 * Information about the owner of a Drive item.
**/
public class Owner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public Domain domain;
    public Owner withDomain(Domain domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive")
    public DriveReference drive;
    public Owner withDrive(DriveReference drive) {
        this.drive = drive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDrive")
    public TeamDriveReference teamDrive;
    public Owner withTeamDrive(TeamDriveReference teamDrive) {
        this.teamDrive = teamDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public Owner withUser(User user) {
        this.user = user;
        return this;
    }
}