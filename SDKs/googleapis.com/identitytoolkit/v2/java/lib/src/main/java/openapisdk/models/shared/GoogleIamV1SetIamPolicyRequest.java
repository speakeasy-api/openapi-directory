package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIamV1SetIamPolicyRequest
 * Request message for `SetIamPolicy` method.
**/
public class GoogleIamV1SetIamPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public GoogleIamV1Policy policy;
    public GoogleIamV1SetIamPolicyRequest withPolicy(GoogleIamV1Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleIamV1SetIamPolicyRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}