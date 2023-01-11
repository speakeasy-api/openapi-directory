package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PolicyBindings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public Expr condition;
    public PolicyBindings withCondition(Expr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String[] members;
    public PolicyBindings withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public PolicyBindings withRole(String role) {
        this.role = role;
        return this;
    }
}