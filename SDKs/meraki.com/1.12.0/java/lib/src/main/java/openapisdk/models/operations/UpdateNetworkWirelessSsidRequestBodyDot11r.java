package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyDot11r
 * The current setting for 802.11r
**/
public class UpdateNetworkWirelessSsidRequestBodyDot11r {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adaptive")
    public Boolean adaptive;
    public UpdateNetworkWirelessSsidRequestBodyDot11r withAdaptive(Boolean adaptive) {
        this.adaptive = adaptive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidRequestBodyDot11r withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}