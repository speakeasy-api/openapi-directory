/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPortsLinkNegotiation - Link negotiation details object for the port
 */
public class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPortsLinkNegotiation {
    /**
     * The duplex mode of the port. Can be 'full' or 'half'
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplex")
    public String duplex;
    public GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPortsLinkNegotiation withDuplex(String duplex) {
        this.duplex = duplex;
        return this;
    }
    
    /**
     * The speed of the port
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speed")
    public Long speed;
    public GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPortsLinkNegotiation withSpeed(Long speed) {
        this.speed = speed;
        return this;
    }
    
}
