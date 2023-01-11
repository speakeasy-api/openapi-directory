package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity
 * EAP settings for identity requests.
**/
public class UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retries")
    public Long retries;
    public UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity withRetries(Long retries) {
        this.retries = retries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Long timeout;
    public UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}