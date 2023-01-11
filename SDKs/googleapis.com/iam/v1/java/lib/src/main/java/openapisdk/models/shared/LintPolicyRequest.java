package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LintPolicyRequest
 * The request to lint a Cloud IAM policy object.
**/
public class LintPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public Expr condition;
    public LintPolicyRequest withCondition(Expr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public LintPolicyRequest withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
}