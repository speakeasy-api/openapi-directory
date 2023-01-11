package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PermissionPermissionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRoles")
    public String[] additionalRoles;
    public PermissionPermissionDetails withAdditionalRoles(String[] additionalRoles) {
        this.additionalRoles = additionalRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inherited")
    public Boolean inherited;
    public PermissionPermissionDetails withInherited(Boolean inherited) {
        this.inherited = inherited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inheritedFrom")
    public String inheritedFrom;
    public PermissionPermissionDetails withInheritedFrom(String inheritedFrom) {
        this.inheritedFrom = inheritedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionType")
    public String permissionType;
    public PermissionPermissionDetails withPermissionType(String permissionType) {
        this.permissionType = permissionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public PermissionPermissionDetails withRole(String role) {
        this.role = role;
        return this;
    }
}