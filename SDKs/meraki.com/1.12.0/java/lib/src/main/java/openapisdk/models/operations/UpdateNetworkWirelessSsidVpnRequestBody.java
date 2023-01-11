package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidVpnRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splitTunnel")
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel splitTunnel;
    public UpdateNetworkWirelessSsidVpnRequestBody withSplitTunnel(UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel splitTunnel) {
        this.splitTunnel = splitTunnel;
        return this;
    }
}