package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootFileName")
    public String bootFileName;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withBootFileName(String bootFileName) {
        this.bootFileName = bootFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootNextServer")
    public String bootNextServer;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withBootNextServer(String bootNextServer) {
        this.bootNextServer = bootNextServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootOptionsEnabled")
    public Boolean bootOptionsEnabled;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withBootOptionsEnabled(Boolean bootOptionsEnabled) {
        this.bootOptionsEnabled = bootOptionsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpLeaseTime")
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum dhcpLeaseTime;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withDhcpLeaseTime(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum dhcpLeaseTime) {
        this.dhcpLeaseTime = dhcpLeaseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpMode")
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum dhcpMode;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withDhcpMode(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum dhcpMode) {
        this.dhcpMode = dhcpMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpOptions")
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[] dhcpOptions;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withDhcpOptions(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[] dhcpOptions) {
        this.dhcpOptions = dhcpOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpRelayServerIps")
    public String[] dhcpRelayServerIps;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withDhcpRelayServerIps(String[] dhcpRelayServerIps) {
        this.dhcpRelayServerIps = dhcpRelayServerIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsCustomNameservers")
    public String[] dnsCustomNameservers;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withDnsCustomNameservers(String[] dnsCustomNameservers) {
        this.dnsCustomNameservers = dnsCustomNameservers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsNameserversOption")
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum dnsNameserversOption;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withDnsNameserversOption(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum dnsNameserversOption) {
        this.dnsNameserversOption = dnsNameserversOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedIpAssignments")
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[] fixedIpAssignments;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withFixedIpAssignments(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[] fixedIpAssignments) {
        this.fixedIpAssignments = fixedIpAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRanges")
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[] reservedIpRanges;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody withReservedIpRanges(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[] reservedIpRanges) {
        this.reservedIpRanges = reservedIpRanges;
        return this;
    }
}