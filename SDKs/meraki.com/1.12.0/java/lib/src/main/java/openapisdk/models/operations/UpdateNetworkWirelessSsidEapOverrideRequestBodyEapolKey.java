package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey
 * EAPOL Key settings.
**/
public class UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retries")
    public Long retries;
    public UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey withRetries(Long retries) {
        this.retries = retries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutInMs")
    public Long timeoutInMs;
    public UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey withTimeoutInMs(Long timeoutInMs) {
        this.timeoutInMs = timeoutInMs;
        return this;
    }
}