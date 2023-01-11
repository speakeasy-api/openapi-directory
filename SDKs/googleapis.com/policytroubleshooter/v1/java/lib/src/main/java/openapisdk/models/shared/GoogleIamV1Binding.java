package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIamV1Binding
 * Associates `members`, or principals, with a `role`.
**/
public class GoogleIamV1Binding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public GoogleTypeExpr condition;
    public GoogleIamV1Binding withCondition(GoogleTypeExpr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String[] members;
    public GoogleIamV1Binding withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public GoogleIamV1Binding withRole(String role) {
        this.role = role;
        return this;
    }
}