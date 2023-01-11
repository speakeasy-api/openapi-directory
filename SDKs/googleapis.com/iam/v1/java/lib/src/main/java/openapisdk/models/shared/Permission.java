package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Permission
 * A permission which can be included by a role.
**/
public class Permission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiDisabled")
    public Boolean apiDisabled;
    public Permission withApiDisabled(Boolean apiDisabled) {
        this.apiDisabled = apiDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRolesSupportLevel")
    public PermissionCustomRolesSupportLevelEnum customRolesSupportLevel;
    public Permission withCustomRolesSupportLevel(PermissionCustomRolesSupportLevelEnum customRolesSupportLevel) {
        this.customRolesSupportLevel = customRolesSupportLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Permission withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Permission withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onlyInPredefinedRoles")
    public Boolean onlyInPredefinedRoles;
    public Permission withOnlyInPredefinedRoles(Boolean onlyInPredefinedRoles) {
        this.onlyInPredefinedRoles = onlyInPredefinedRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPermission")
    public String primaryPermission;
    public Permission withPrimaryPermission(String primaryPermission) {
        this.primaryPermission = primaryPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage")
    public PermissionStageEnum stage;
    public Permission withStage(PermissionStageEnum stage) {
        this.stage = stage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Permission withTitle(String title) {
        this.title = title;
        return this;
    }
}