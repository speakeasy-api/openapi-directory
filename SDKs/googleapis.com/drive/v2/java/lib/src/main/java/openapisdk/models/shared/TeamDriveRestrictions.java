package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamDriveRestrictions
 * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
**/
public class TeamDriveRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminManagedRestrictions")
    public Boolean adminManagedRestrictions;
    public TeamDriveRestrictions withAdminManagedRestrictions(Boolean adminManagedRestrictions) {
        this.adminManagedRestrictions = adminManagedRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyRequiresWriterPermission")
    public Boolean copyRequiresWriterPermission;
    public TeamDriveRestrictions withCopyRequiresWriterPermission(Boolean copyRequiresWriterPermission) {
        this.copyRequiresWriterPermission = copyRequiresWriterPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainUsersOnly")
    public Boolean domainUsersOnly;
    public TeamDriveRestrictions withDomainUsersOnly(Boolean domainUsersOnly) {
        this.domainUsersOnly = domainUsersOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamMembersOnly")
    public Boolean teamMembersOnly;
    public TeamDriveRestrictions withTeamMembersOnly(Boolean teamMembersOnly) {
        this.teamMembersOnly = teamMembersOnly;
        return this;
    }
}