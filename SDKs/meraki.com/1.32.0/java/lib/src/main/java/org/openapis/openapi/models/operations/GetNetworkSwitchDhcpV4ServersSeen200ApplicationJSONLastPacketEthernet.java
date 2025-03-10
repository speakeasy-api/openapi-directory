/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketEthernet - Additional ethernet attributes of the packet.
 */
public class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketEthernet {
    /**
     * Ethernet type of the packet.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketEthernet withType(String type) {
        this.type = type;
        return this;
    }
    
    public GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketEthernet(){}
}
