package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayBinding
 * Associates `members` with a `role`.
**/
public class ApigatewayBinding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public ApigatewayExpr condition;
    public ApigatewayBinding withCondition(ApigatewayExpr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String[] members;
    public ApigatewayBinding withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public ApigatewayBinding withRole(String role) {
        this.role = role;
        return this;
    }
}