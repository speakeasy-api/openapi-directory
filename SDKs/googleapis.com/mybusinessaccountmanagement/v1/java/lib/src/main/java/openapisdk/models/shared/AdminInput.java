package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminInput
 * An administrator of an Account or a location.
**/
public class AdminInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public AdminInput withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin")
    public String admin;
    public AdminInput withAdmin(String admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AdminInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public AdminRoleEnum role;
    public AdminInput withRole(AdminRoleEnum role) {
        this.role = role;
        return this;
    }
}