package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIamV1GetIamPolicyRequest
 * Request message for `GetIamPolicy` method.
**/
public class GoogleIamV1GetIamPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public GoogleIamV1GetPolicyOptions options;
    public GoogleIamV1GetIamPolicyRequest withOptions(GoogleIamV1GetPolicyOptions options) {
        this.options = options;
        return this;
    }
}