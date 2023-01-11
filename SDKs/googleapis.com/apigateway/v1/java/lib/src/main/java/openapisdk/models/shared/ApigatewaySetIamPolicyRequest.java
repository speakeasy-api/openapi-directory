package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewaySetIamPolicyRequest
 * Request message for `SetIamPolicy` method.
**/
public class ApigatewaySetIamPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public ApigatewayPolicy policy;
    public ApigatewaySetIamPolicyRequest withPolicy(ApigatewayPolicy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public ApigatewaySetIamPolicyRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}