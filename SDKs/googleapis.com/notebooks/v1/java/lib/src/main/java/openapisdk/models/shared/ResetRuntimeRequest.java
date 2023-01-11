package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResetRuntimeRequest
 * Request for resetting a Managed Notebook Runtime.
**/
public class ResetRuntimeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ResetRuntimeRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}