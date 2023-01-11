package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetIamPolicyRequest
 * Request message for SetIamPolicy method.
**/
public class SetIamPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public Policy policy;
    public SetIamPolicyRequest withPolicy(Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public SetIamPolicyRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}