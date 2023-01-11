package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_admin")
    public Boolean clientAdmin;
    public UserOptions withClientAdmin(Boolean clientAdmin) {
        this.clientAdmin = clientAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserOptions withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public UserOptions withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public UserOptions withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org_default_role")
    public String orgDefaultRole;
    public UserOptions withOrgDefaultRole(String orgDefaultRole) {
        this.orgDefaultRole = orgDefaultRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org_roles")
    public java.util.Map<String, Object> orgRoles;
    public UserOptions withOrgRoles(java.util.Map<String, Object> orgRoles) {
        this.orgRoles = orgRoles;
        return this;
    }
}