package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel
 * The VPN split tunnel settings for this SSID.
**/
public class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[] rules;
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel withRules(UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[] rules) {
        this.rules = rules;
        return this;
    }
}