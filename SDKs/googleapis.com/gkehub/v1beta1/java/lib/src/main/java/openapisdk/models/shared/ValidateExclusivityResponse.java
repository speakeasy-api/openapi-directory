package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidateExclusivityResponse
 * The response of exclusivity artifacts validation result status.
**/
public class ValidateExclusivityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GoogleRpcStatus status;
    public ValidateExclusivityResponse withStatus(GoogleRpcStatus status) {
        this.status = status;
        return this;
    }
}