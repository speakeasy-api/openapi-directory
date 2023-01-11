package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceVlanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceIp")
    public String applianceIp;
    public UpdateNetworkApplianceVlanRequestBody withApplianceIp(String applianceIp) {
        this.applianceIp = applianceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpBootFilename")
    public String dhcpBootFilename;
    public UpdateNetworkApplianceVlanRequestBody withDhcpBootFilename(String dhcpBootFilename) {
        this.dhcpBootFilename = dhcpBootFilename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpBootNextServer")
    public String dhcpBootNextServer;
    public UpdateNetworkApplianceVlanRequestBody withDhcpBootNextServer(String dhcpBootNextServer) {
        this.dhcpBootNextServer = dhcpBootNextServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpBootOptionsEnabled")
    public Boolean dhcpBootOptionsEnabled;
    public UpdateNetworkApplianceVlanRequestBody withDhcpBootOptionsEnabled(Boolean dhcpBootOptionsEnabled) {
        this.dhcpBootOptionsEnabled = dhcpBootOptionsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpHandling")
    public UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum dhcpHandling;
    public UpdateNetworkApplianceVlanRequestBody withDhcpHandling(UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum dhcpHandling) {
        this.dhcpHandling = dhcpHandling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpLeaseTime")
    public UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum dhcpLeaseTime;
    public UpdateNetworkApplianceVlanRequestBody withDhcpLeaseTime(UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum dhcpLeaseTime) {
        this.dhcpLeaseTime = dhcpLeaseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpOptions")
    public UpdateNetworkApplianceVlanRequestBodyDhcpOptions[] dhcpOptions;
    public UpdateNetworkApplianceVlanRequestBody withDhcpOptions(UpdateNetworkApplianceVlanRequestBodyDhcpOptions[] dhcpOptions) {
        this.dhcpOptions = dhcpOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpRelayServerIps")
    public String[] dhcpRelayServerIps;
    public UpdateNetworkApplianceVlanRequestBody withDhcpRelayServerIps(String[] dhcpRelayServerIps) {
        this.dhcpRelayServerIps = dhcpRelayServerIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsNameservers")
    public String dnsNameservers;
    public UpdateNetworkApplianceVlanRequestBody withDnsNameservers(String dnsNameservers) {
        this.dnsNameservers = dnsNameservers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedIpAssignments")
    public java.util.Map<String, Object> fixedIpAssignments;
    public UpdateNetworkApplianceVlanRequestBody withFixedIpAssignments(java.util.Map<String, Object> fixedIpAssignments) {
        this.fixedIpAssignments = fixedIpAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public UpdateNetworkApplianceVlanRequestBody withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkApplianceVlanRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRanges")
    public UpdateNetworkApplianceVlanRequestBodyReservedIpRanges[] reservedIpRanges;
    public UpdateNetworkApplianceVlanRequestBody withReservedIpRanges(UpdateNetworkApplianceVlanRequestBodyReservedIpRanges[] reservedIpRanges) {
        this.reservedIpRanges = reservedIpRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public UpdateNetworkApplianceVlanRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpnNatSubnet")
    public String vpnNatSubnet;
    public UpdateNetworkApplianceVlanRequestBody withVpnNatSubnet(String vpnNatSubnet) {
        this.vpnNatSubnet = vpnNatSubnet;
        return this;
    }
}