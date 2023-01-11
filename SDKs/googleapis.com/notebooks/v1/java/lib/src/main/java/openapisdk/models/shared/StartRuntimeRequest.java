package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartRuntimeRequest
 * Request for starting a Managed Notebook Runtime.
**/
public class StartRuntimeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public StartRuntimeRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}