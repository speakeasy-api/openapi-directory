/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworkSwitchAccessPolicies200ApplicationJSONRadius - Object for RADIUS Settings
 */
public class GetNetworkSwitchAccessPolicies200ApplicationJSONRadius {
    /**
     * Critical auth settings for when authentication is rejected by the RADIUS server
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criticalAuth")
    public GetNetworkSwitchAccessPolicies200ApplicationJSONRadiusCriticalAuth criticalAuth;

    public GetNetworkSwitchAccessPolicies200ApplicationJSONRadius withCriticalAuth(GetNetworkSwitchAccessPolicies200ApplicationJSONRadiusCriticalAuth criticalAuth) {
        this.criticalAuth = criticalAuth;
        return this;
    }
    
    /**
     * VLAN that clients will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedAuthVlanId")
    public Long failedAuthVlanId;

    public GetNetworkSwitchAccessPolicies200ApplicationJSONRadius withFailedAuthVlanId(Long failedAuthVlanId) {
        this.failedAuthVlanId = failedAuthVlanId;
        return this;
    }
    
    /**
     * Re-authentication period in seconds. Will be null if hostMode is Multi-Auth
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reAuthenticationInterval")
    public Long reAuthenticationInterval;

    public GetNetworkSwitchAccessPolicies200ApplicationJSONRadius withReAuthenticationInterval(Long reAuthenticationInterval) {
        this.reAuthenticationInterval = reAuthenticationInterval;
        return this;
    }
    
    public GetNetworkSwitchAccessPolicies200ApplicationJSONRadius(){}
}
