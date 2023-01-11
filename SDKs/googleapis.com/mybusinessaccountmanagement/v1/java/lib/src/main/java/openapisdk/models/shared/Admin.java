package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Admin
 * An administrator of an Account or a location.
**/
public class Admin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public Admin withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin")
    public String admin;
    public Admin withAdmin(String admin) {
        this.admin = admin;
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