package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Admin
 * An administrator of an Account or a Location.
**/
public class Admin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminName")
    public String adminName;
    public Admin withAdminName(String adminName) {
        this.adminName = adminName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Admin withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingInvitation")
    public Boolean pendingInvitation;
    public Admin withPendingInvitation(Boolean pendingInvitation) {
        this.pendingInvitation = pendingInvitation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public AdminRoleEnum role;
    public Admin withRole(AdminRoleEnum role) {
        this.role = role;
        return this;
    }
}