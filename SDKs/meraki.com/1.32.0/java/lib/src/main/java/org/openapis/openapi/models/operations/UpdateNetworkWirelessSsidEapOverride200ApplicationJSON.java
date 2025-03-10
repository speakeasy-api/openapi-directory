/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkWirelessSsidEapOverride200ApplicationJSON - Successful operation
 */
public class UpdateNetworkWirelessSsidEapOverride200ApplicationJSON {
    /**
     * EAPOL Key settings.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eapolKey")
    public UpdateNetworkWirelessSsidEapOverride200ApplicationJSONEapolKey eapolKey;

    public UpdateNetworkWirelessSsidEapOverride200ApplicationJSON withEapolKey(UpdateNetworkWirelessSsidEapOverride200ApplicationJSONEapolKey eapolKey) {
        this.eapolKey = eapolKey;
        return this;
    }
    
    /**
     * EAP settings for identity requests.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public UpdateNetworkWirelessSsidEapOverride200ApplicationJSONIdentity identity;

    public UpdateNetworkWirelessSsidEapOverride200ApplicationJSON withIdentity(UpdateNetworkWirelessSsidEapOverride200ApplicationJSONIdentity identity) {
        this.identity = identity;
        return this;
    }
    
    /**
     * Maximum number of general EAP retries.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetries")
    public Long maxRetries;

    public UpdateNetworkWirelessSsidEapOverride200ApplicationJSON withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    
    /**
     * General EAP timeout in seconds.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Long timeout;

    public UpdateNetworkWirelessSsidEapOverride200ApplicationJSON withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    
    public UpdateNetworkWirelessSsidEapOverride200ApplicationJSON(){}
}
