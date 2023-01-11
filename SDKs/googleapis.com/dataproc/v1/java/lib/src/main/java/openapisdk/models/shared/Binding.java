package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Binding
 * Associates members, or principals, with a role.
**/
public class Binding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public Expr condition;
    public Binding withCondition(Expr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String[] members;
    public Binding withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public Binding withRole(String role) {
        this.role = role;
        return this;
    }
}