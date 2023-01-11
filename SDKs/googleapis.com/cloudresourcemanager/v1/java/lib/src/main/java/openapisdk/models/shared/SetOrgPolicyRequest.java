package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetOrgPolicyRequest
 * The request sent to the SetOrgPolicyRequest method.
**/
public class SetOrgPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public OrgPolicy policy;
    public SetOrgPolicyRequest withPolicy(OrgPolicy policy) {
        this.policy = policy;
        return this;
    }
}