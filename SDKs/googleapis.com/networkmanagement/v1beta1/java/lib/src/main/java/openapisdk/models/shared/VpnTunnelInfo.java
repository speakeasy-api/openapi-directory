package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpnTunnelInfo
 * For display only. Metadata associated with a Compute Engine VPN tunnel.
**/
public class VpnTunnelInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public VpnTunnelInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUri")
    public String networkUri;
    public VpnTunnelInfo withNetworkUri(String networkUri) {
        this.networkUri = networkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public VpnTunnelInfo withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteGateway")
    public String remoteGateway;
    public VpnTunnelInfo withRemoteGateway(String remoteGateway) {
        this.remoteGateway = remoteGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteGatewayIp")
    public String remoteGatewayIp;
    public VpnTunnelInfo withRemoteGatewayIp(String remoteGatewayIp) {
        this.remoteGatewayIp = remoteGatewayIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingType")
    public VpnTunnelInfoRoutingTypeEnum routingType;
    public VpnTunnelInfo withRoutingType(VpnTunnelInfoRoutingTypeEnum routingType) {
        this.routingType = routingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceGateway")
    public String sourceGateway;
    public VpnTunnelInfo withSourceGateway(String sourceGateway) {
        this.sourceGateway = sourceGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceGatewayIp")
    public String sourceGatewayIp;
    public VpnTunnelInfo withSourceGatewayIp(String sourceGatewayIp) {
        this.sourceGatewayIp = sourceGatewayIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public VpnTunnelInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}