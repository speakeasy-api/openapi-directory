package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveIamPolicyResponse
 * Response message for DataprocMetastore.RemoveIamPolicy.
**/
public class RemoveIamPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public RemoveIamPolicyResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}