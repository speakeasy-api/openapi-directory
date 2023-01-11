package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetEffectiveOrgPolicyRequest
 * The request sent to the GetEffectiveOrgPolicy method.
**/
public class GetEffectiveOrgPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraint")
    public String constraint;
    public GetEffectiveOrgPolicyRequest withConstraint(String constraint) {
        this.constraint = constraint;
        return this;
    }
}