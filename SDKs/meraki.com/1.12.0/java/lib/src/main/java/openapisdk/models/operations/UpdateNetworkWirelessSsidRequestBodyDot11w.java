package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyDot11w
 * The current setting for Protected Management Frames (802.11w).
**/
public class UpdateNetworkWirelessSsidRequestBodyDot11w {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidRequestBodyDot11w withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public UpdateNetworkWirelessSsidRequestBodyDot11w withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}