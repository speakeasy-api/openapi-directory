/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONHubs {
    /**
     * The network ID of the hub.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hubId")
    public String hubId;
    public UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONHubs withHubId(String hubId) {
        this.hubId = hubId;
        return this;
    }
    
    /**
     * Indicates whether default route traffic should be sent to this hub.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefaultRoute")
    public Boolean useDefaultRoute;
    public UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONHubs withUseDefaultRoute(Boolean useDefaultRoute) {
        this.useDefaultRoute = useDefaultRoute;
        return this;
    }
    
}
