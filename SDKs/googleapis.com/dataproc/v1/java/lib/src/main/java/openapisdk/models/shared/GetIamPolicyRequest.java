package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetIamPolicyRequest
 * Request message for GetIamPolicy method.
**/
public class GetIamPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public GetPolicyOptions options;
    public GetIamPolicyRequest withOptions(GetPolicyOptions options) {
        this.options = options;
        return this;
    }
}