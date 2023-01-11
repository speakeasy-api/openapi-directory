package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefreshRuntimeTokenInternalRequest
 * Request for getting a new access token.
**/
public class RefreshRuntimeTokenInternalRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public RefreshRuntimeTokenInternalRequest withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
}