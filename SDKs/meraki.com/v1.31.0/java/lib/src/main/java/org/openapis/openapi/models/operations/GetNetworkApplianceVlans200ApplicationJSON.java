/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworkApplianceVlans200ApplicationJSON {
    /**
     * The local IP of the appliance on the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceIp")
    public String applianceIp;
    public GetNetworkApplianceVlans200ApplicationJSON withApplianceIp(String applianceIp) {
        this.applianceIp = applianceIp;
        return this;
    }
    
    /**
     * CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidr")
    public String cidr;
    public GetNetworkApplianceVlans200ApplicationJSON withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    
    /**
     * DHCP boot option for boot filename
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpBootFilename")
    public String dhcpBootFilename;
    public GetNetworkApplianceVlans200ApplicationJSON withDhcpBootFilename(String dhcpBootFilename) {
        this.dhcpBootFilename = dhcpBootFilename;
        return this;
    }
    
    /**
     * DHCP boot option to direct boot clients to the server to load the boot file from
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpBootNextServer")
    public String dhcpBootNextServer;
    public GetNetworkApplianceVlans200ApplicationJSON withDhcpBootNextServer(String dhcpBootNextServer) {
        this.dhcpBootNextServer = dhcpBootNextServer;
        return this;
    }
    
    /**
     * Use DHCP boot options specified in other properties
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpBootOptionsEnabled")
    public Boolean dhcpBootOptionsEnabled;
    public GetNetworkApplianceVlans200ApplicationJSON withDhcpBootOptionsEnabled(Boolean dhcpBootOptionsEnabled) {
        this.dhcpBootOptionsEnabled = dhcpBootOptionsEnabled;
        return this;
    }
    
    /**
     * The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpHandling")
    public GetNetworkApplianceVlans200ApplicationJSONDhcpHandlingEnum dhcpHandling;
    public GetNetworkApplianceVlans200ApplicationJSON withDhcpHandling(GetNetworkApplianceVlans200ApplicationJSONDhcpHandlingEnum dhcpHandling) {
        this.dhcpHandling = dhcpHandling;
        return this;
    }
    
    /**
     * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpLeaseTime")
    public GetNetworkApplianceVlans200ApplicationJSONDhcpLeaseTimeEnum dhcpLeaseTime;
    public GetNetworkApplianceVlans200ApplicationJSON withDhcpLeaseTime(GetNetworkApplianceVlans200ApplicationJSONDhcpLeaseTimeEnum dhcpLeaseTime) {
        this.dhcpLeaseTime = dhcpLeaseTime;
        return this;
    }
    
    /**
     * The list of DHCP options that will be included in DHCP responses. Each object in the list should have "code", "type", and "value" properties.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpOptions")
    public GetNetworkApplianceVlans200ApplicationJSONDhcpOptions[] dhcpOptions;
    public GetNetworkApplianceVlans200ApplicationJSON withDhcpOptions(GetNetworkApplianceVlans200ApplicationJSONDhcpOptions[] dhcpOptions) {
        this.dhcpOptions = dhcpOptions;
        return this;
    }
    
    /**
     * The IPs of the DHCP servers that DHCP requests should be relayed to
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dhcpRelayServerIps")
    public String[] dhcpRelayServerIps;
    public GetNetworkApplianceVlans200ApplicationJSON withDhcpRelayServerIps(String[] dhcpRelayServerIps) {
        this.dhcpRelayServerIps = dhcpRelayServerIps;
        return this;
    }
    
    /**
     * The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsNameservers")
    public String dnsNameservers;
    public GetNetworkApplianceVlans200ApplicationJSON withDnsNameservers(String dnsNameservers) {
        this.dnsNameservers = dnsNameservers;
        return this;
    }
    
    /**
     * The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedIpAssignments")
    public java.util.Map<String, Object> fixedIpAssignments;
    public GetNetworkApplianceVlans200ApplicationJSON withFixedIpAssignments(java.util.Map<String, Object> fixedIpAssignments) {
        this.fixedIpAssignments = fixedIpAssignments;
        return this;
    }
    
    /**
     * The id of the desired group policy to apply to the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;
    public GetNetworkApplianceVlans200ApplicationJSON withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    
    /**
     * The VLAN ID of the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetNetworkApplianceVlans200ApplicationJSON withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The interface ID of the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interfaceId")
    public String interfaceId;
    public GetNetworkApplianceVlans200ApplicationJSON withInterfaceId(String interfaceId) {
        this.interfaceId = interfaceId;
        return this;
    }
    
    /**
     * IPv6 configuration on the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6")
    public GetNetworkApplianceVlans200ApplicationJSONIpv6 ipv6;
    public GetNetworkApplianceVlans200ApplicationJSON withIpv6(GetNetworkApplianceVlans200ApplicationJSONIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
    
    /**
     * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandatoryDhcp")
    public GetNetworkApplianceVlans200ApplicationJSONMandatoryDhcp mandatoryDhcp;
    public GetNetworkApplianceVlans200ApplicationJSON withMandatoryDhcp(GetNetworkApplianceVlans200ApplicationJSONMandatoryDhcp mandatoryDhcp) {
        this.mandatoryDhcp = mandatoryDhcp;
        return this;
    }
    
    /**
     * Mask used for the subnet of all bound to the template networks. Applicable only for template network.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mask")
    public Long mask;
    public GetNetworkApplianceVlans200ApplicationJSON withMask(Long mask) {
        this.mask = mask;
        return this;
    }
    
    /**
     * The name of the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetNetworkApplianceVlans200ApplicationJSON withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The DHCP reserved IP ranges on the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRanges")
    public GetNetworkApplianceVlans200ApplicationJSONReservedIpRanges[] reservedIpRanges;
    public GetNetworkApplianceVlans200ApplicationJSON withReservedIpRanges(GetNetworkApplianceVlans200ApplicationJSONReservedIpRanges[] reservedIpRanges) {
        this.reservedIpRanges = reservedIpRanges;
        return this;
    }
    
    /**
     * The subnet of the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public GetNetworkApplianceVlans200ApplicationJSON withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    
    /**
     * Type of subnetting of the VLAN. Applicable only for template network.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateVlanType")
    public GetNetworkApplianceVlans200ApplicationJSONTemplateVlanTypeEnum templateVlanType;
    public GetNetworkApplianceVlans200ApplicationJSON withTemplateVlanType(GetNetworkApplianceVlans200ApplicationJSONTemplateVlanTypeEnum templateVlanType) {
        this.templateVlanType = templateVlanType;
        return this;
    }
    
    /**
     * The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpnNatSubnet")
    public String vpnNatSubnet;
    public GetNetworkApplianceVlans200ApplicationJSON withVpnNatSubnet(String vpnNatSubnet) {
        this.vpnNatSubnet = vpnNatSubnet;
        return this;
    }
    
}
