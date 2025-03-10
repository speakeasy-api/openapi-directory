/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworkWirelessSsidEapOverride200ApplicationJSON - Successful operation
 */
public class GetNetworkWirelessSsidEapOverride200ApplicationJSON {
    /**
     * EAPOL Key settings.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eapolKey")
    public GetNetworkWirelessSsidEapOverride200ApplicationJSONEapolKey eapolKey;
    public GetNetworkWirelessSsidEapOverride200ApplicationJSON withEapolKey(GetNetworkWirelessSsidEapOverride200ApplicationJSONEapolKey eapolKey) {
        this.eapolKey = eapolKey;
        return this;
    }
    
    /**
     * EAPOL Key settings.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public GetNetworkWirelessSsidEapOverride200ApplicationJSONIdentity identity;
    public GetNetworkWirelessSsidEapOverride200ApplicationJSON withIdentity(GetNetworkWirelessSsidEapOverride200ApplicationJSONIdentity identity) {
        this.identity = identity;
        return this;
    }
    
    /**
     * Maximum number of general EAP retries.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetries")
    public Long maxRetries;
    public GetNetworkWirelessSsidEapOverride200ApplicationJSON withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    
    /**
     * General EAP timeout in seconds.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Long timeout;
    public GetNetworkWirelessSsidEapOverride200ApplicationJSON withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    
}
