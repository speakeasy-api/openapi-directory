/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateNetworkApplianceVlan201ApplicationJSON - Successful operation
 */
public class CreateNetworkApplianceVlan201ApplicationJSON {
    /**
     * The local IP of the appliance on the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applianceIp")
    public String applianceIp;

    public CreateNetworkApplianceVlan201ApplicationJSON withApplianceIp(String applianceIp) {
        this.applianceIp = applianceIp;
        return this;
    }
    
    /**
     * CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidr")
    public String cidr;

    public CreateNetworkApplianceVlan201ApplicationJSON withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    
    /**
     * The id of the desired group policy to apply to the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;

    public CreateNetworkApplianceVlan201ApplicationJSON withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    
    /**
     * The VLAN ID of the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public CreateNetworkApplianceVlan201ApplicationJSON withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The interface ID of the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interfaceId")
    public String interfaceId;

    public CreateNetworkApplianceVlan201ApplicationJSON withInterfaceId(String interfaceId) {
        this.interfaceId = interfaceId;
        return this;
    }
    
    /**
     * IPv6 configuration on the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6")
    public CreateNetworkApplianceVlan201ApplicationJSONIpv6 ipv6;

    public CreateNetworkApplianceVlan201ApplicationJSON withIpv6(CreateNetworkApplianceVlan201ApplicationJSONIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
    
    /**
     * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandatoryDhcp")
    public CreateNetworkApplianceVlan201ApplicationJSONMandatoryDhcp mandatoryDhcp;

    public CreateNetworkApplianceVlan201ApplicationJSON withMandatoryDhcp(CreateNetworkApplianceVlan201ApplicationJSONMandatoryDhcp mandatoryDhcp) {
        this.mandatoryDhcp = mandatoryDhcp;
        return this;
    }
    
    /**
     * Mask used for the subnet of all bound to the template networks. Applicable only for template network.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mask")
    public Long mask;

    public CreateNetworkApplianceVlan201ApplicationJSON withMask(Long mask) {
        this.mask = mask;
        return this;
    }
    
    /**
     * The name of the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public CreateNetworkApplianceVlan201ApplicationJSON withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The subnet of the VLAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;

    public CreateNetworkApplianceVlan201ApplicationJSON withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    
    /**
     * Type of subnetting of the VLAN. Applicable only for template network.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateVlanType")
    public CreateNetworkApplianceVlan201ApplicationJSONTemplateVlanTypeEnum templateVlanType;

    public CreateNetworkApplianceVlan201ApplicationJSON withTemplateVlanType(CreateNetworkApplianceVlan201ApplicationJSONTemplateVlanTypeEnum templateVlanType) {
        this.templateVlanType = templateVlanType;
        return this;
    }
    
    public CreateNetworkApplianceVlan201ApplicationJSON(){}
}
