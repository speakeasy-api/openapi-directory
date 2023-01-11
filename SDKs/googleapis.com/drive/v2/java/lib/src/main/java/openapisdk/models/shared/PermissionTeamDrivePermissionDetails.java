package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PermissionTeamDrivePermissionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRoles")
    public String[] additionalRoles;
    public PermissionTeamDrivePermissionDetails withAdditionalRoles(String[] additionalRoles) {
        this.additionalRoles = additionalRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inherited")
    public Boolean inherited;
    public PermissionTeamDrivePermissionDetails withInherited(Boolean inherited) {
        this.inherited = inherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inheritedFrom")
    public String inheritedFrom;
    public PermissionTeamDrivePermissionDetails withInheritedFrom(String inheritedFrom) {
        this.inheritedFrom = inheritedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public PermissionTeamDrivePermissionDetails withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDrivePermissionType")
    public String teamDrivePermissionType;
    public PermissionTeamDrivePermissionDetails withTeamDrivePermissionType(String teamDrivePermissionType) {
        this.teamDrivePermissionType = teamDrivePermissionType;
        return this;
    }
}