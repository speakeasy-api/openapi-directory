package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPermission
 * AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
**/
public class AccountPermission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountProfiles")
    public AccountPermissionAccountProfilesEnum[] accountProfiles;
    public AccountPermission withAccountProfiles(AccountPermissionAccountProfilesEnum[] accountProfiles) {
        this.accountProfiles = accountProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountPermission withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountPermission withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public AccountPermissionLevelEnum level;
    public AccountPermission withLevel(AccountPermissionLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountPermission withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionGroupId")
    public String permissionGroupId;
    public AccountPermission withPermissionGroupId(String permissionGroupId) {
        this.permissionGroupId = permissionGroupId;
        return this;
    }
}