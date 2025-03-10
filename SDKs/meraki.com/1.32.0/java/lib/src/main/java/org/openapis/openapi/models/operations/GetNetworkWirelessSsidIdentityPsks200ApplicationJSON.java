/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworkWirelessSsidIdentityPsks200ApplicationJSON {
    /**
     * The email associated with the System's Manager User
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;

    public GetNetworkWirelessSsidIdentityPsks200ApplicationJSON withEmail(String email) {
        this.email = email;
        return this;
    }
    
    /**
     * Timestamp for when the Identity PSK expires, or 'null' to never expire
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiresAt")
    public String expiresAt;

    public GetNetworkWirelessSsidIdentityPsks200ApplicationJSON withExpiresAt(String expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    
    /**
     * The group policy to be applied to clients
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPolicyId")
    public String groupPolicyId;

    public GetNetworkWirelessSsidIdentityPsks200ApplicationJSON withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    
    /**
     * The unique identifier of the Identity PSK
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public GetNetworkWirelessSsidIdentityPsks200ApplicationJSON withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The name of the Identity PSK
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public GetNetworkWirelessSsidIdentityPsks200ApplicationJSON withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The passphrase for client authentication
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passphrase")
    public String passphrase;

    public GetNetworkWirelessSsidIdentityPsks200ApplicationJSON withPassphrase(String passphrase) {
        this.passphrase = passphrase;
        return this;
    }
    
    /**
     * The WiFi Personal Network unique identifier
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiPersonalNetworkId")
    public String wifiPersonalNetworkId;

    public GetNetworkWirelessSsidIdentityPsks200ApplicationJSON withWifiPersonalNetworkId(String wifiPersonalNetworkId) {
        this.wifiPersonalNetworkId = wifiPersonalNetworkId;
        return this;
    }
    
    public GetNetworkWirelessSsidIdentityPsks200ApplicationJSON(){}
}
