package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailoverInstanceRequest
 * Request for Failover.
**/
public class FailoverInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataProtectionMode")
    public FailoverInstanceRequestDataProtectionModeEnum dataProtectionMode;
    public FailoverInstanceRequest withDataProtectionMode(FailoverInstanceRequestDataProtectionModeEnum dataProtectionMode) {
        this.dataProtectionMode = dataProtectionMode;
        return this;
    }
}