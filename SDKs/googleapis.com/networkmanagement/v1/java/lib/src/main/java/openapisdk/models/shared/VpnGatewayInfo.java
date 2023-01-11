package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpnGatewayInfo
 * For display only. Metadata associated with a Compute Engine VPN gateway.
**/
public class VpnGatewayInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public VpnGatewayInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public VpnGatewayInfo withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUri")
    public String networkUri;
    public VpnGatewayInfo withNetworkUri(String networkUri) {
        this.networkUri = networkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public VpnGatewayInfo withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public VpnGatewayInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpnTunnelUri")
    public String vpnTunnelUri;
    public VpnGatewayInfo withVpnTunnelUri(String vpnTunnelUri) {
        this.vpnTunnelUri = vpnTunnelUri;
        return this;
    }
}