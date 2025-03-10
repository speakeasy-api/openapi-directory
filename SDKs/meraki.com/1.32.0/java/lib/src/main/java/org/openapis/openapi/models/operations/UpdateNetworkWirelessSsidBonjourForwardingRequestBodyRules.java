/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules {
    /**
     * A description for your Bonjour forwarding rule. Optional.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * A list of Bonjour services. At least one service must be specified. Available services are 'All Services', 'AirPlay', 'AFP', 'BitTorrent', 'FTP', 'iChat', 'iTunes', 'Printers', 'Samba', 'Scanners' and 'SSH'
     */
    @JsonProperty("services")
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[] services;

    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules withServices(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[] services) {
        this.services = services;
        return this;
    }
    
    /**
     * The ID of the service VLAN. Required.
     */
    @JsonProperty("vlanId")
    public String vlanId;

    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
    
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules(@JsonProperty("services") UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[] services, @JsonProperty("vlanId") String vlanId) {
        this.services = services;
        this.vlanId = vlanId;
  }
}
