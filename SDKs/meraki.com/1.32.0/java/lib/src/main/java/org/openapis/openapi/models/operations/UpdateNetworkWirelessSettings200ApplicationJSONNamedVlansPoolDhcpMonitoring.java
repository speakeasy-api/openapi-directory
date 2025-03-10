/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring - Named VLAN Pool DHCP Monitoring settings.
 */
public class UpdateNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring {
    /**
     * The duration in minutes that devices will refrain from using dirty VLANs before adding them back to the pool.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;

    public UpdateNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    
    /**
     * Whether or not devices using named VLAN pools should remove dirty VLANs from the pool, thereby preventing clients from being assigned to VLANs where they would be unable to obtain an IP address via DHCP
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;

    public UpdateNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    public UpdateNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring(){}
}
