package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserRole
 * Contains properties of auser role, which is used to manage user access.
**/
public class UserRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public UserRole withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultUserRole")
    public Boolean defaultUserRole;
    public UserRole withDefaultUserRole(Boolean defaultUserRole) {
        this.defaultUserRole = defaultUserRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserRole withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UserRole withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserRole withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentUserRoleId")
    public String parentUserRoleId;
    public UserRole withParentUserRoleId(String parentUserRoleId) {
        this.parentUserRoleId = parentUserRoleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public UserRolePermission[] permissions;
    public UserRole withPermissions(UserRolePermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public UserRole withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
}