package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOrgPolicyRequest
 * The request sent to the GetOrgPolicy method.
**/
public class GetOrgPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraint")
    public String constraint;
    public GetOrgPolicyRequest withConstraint(String constraint) {
        this.constraint = constraint;
        return this;
    }
}