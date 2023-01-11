package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetIamPolicyRequest
 * Request message for `SetIamPolicy` method.
**/
public class SetIamPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public IamPolicy policy;
    public SetIamPolicyRequest withPolicy(IamPolicy policy) {
        this.policy = policy;
        return this;
    }
}