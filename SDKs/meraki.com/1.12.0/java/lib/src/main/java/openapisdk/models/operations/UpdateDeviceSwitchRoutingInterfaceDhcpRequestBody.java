package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootFileName")
    public String bootFileName;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withBootFileName(String bootFileName) {
        this.bootFileName = bootFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootNextServer")
    public String bootNextServer;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withBootNextServer(String bootNextServer) {
        this.bootNextServer = bootNextServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootOptionsEnabled")
    public Boolean bootOptionsEnabled;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withBootOptionsEnabled(Boolean bootOptionsEnabled) {
        this.bootOptionsEnabled = bootOptionsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpLeaseTime")
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum dhcpLeaseTime;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withDhcpLeaseTime(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum dhcpLeaseTime) {
        this.dhcpLeaseTime = dhcpLeaseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpMode")
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum dhcpMode;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withDhcpMode(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum dhcpMode) {
        this.dhcpMode = dhcpMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpOptions")
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[] dhcpOptions;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withDhcpOptions(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[] dhcpOptions) {
        this.dhcpOptions = dhcpOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpRelayServerIps")
    public String[] dhcpRelayServerIps;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withDhcpRelayServerIps(String[] dhcpRelayServerIps) {
        this.dhcpRelayServerIps = dhcpRelayServerIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsCustomNameservers")
    public String[] dnsCustomNameservers;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withDnsCustomNameservers(String[] dnsCustomNameservers) {
        this.dnsCustomNameservers = dnsCustomNameservers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsNameserversOption")
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum dnsNameserversOption;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withDnsNameserversOption(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum dnsNameserversOption) {
        this.dnsNameserversOption = dnsNameserversOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedIpAssignments")
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[] fixedIpAssignments;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withFixedIpAssignments(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[] fixedIpAssignments) {
        this.fixedIpAssignments = fixedIpAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRanges")
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[] reservedIpRanges;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody withReservedIpRanges(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[] reservedIpRanges) {
        this.reservedIpRanges = reservedIpRanges;
        return this;
    }
}