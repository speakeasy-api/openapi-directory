package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidEapOverrideRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eapolKey")
    public UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey eapolKey;
    public UpdateNetworkWirelessSsidEapOverrideRequestBody withEapolKey(UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey eapolKey) {
        this.eapolKey = eapolKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity identity;
    public UpdateNetworkWirelessSsidEapOverrideRequestBody withIdentity(UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetries")
    public Long maxRetries;
    public UpdateNetworkWirelessSsidEapOverrideRequestBody withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Long timeout;
    public UpdateNetworkWirelessSsidEapOverrideRequestBody withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}