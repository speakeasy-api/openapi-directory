package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopRuntimeRequest
 * Request for stopping a Managed Notebook Runtime.
**/
public class StopRuntimeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public StopRuntimeRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}