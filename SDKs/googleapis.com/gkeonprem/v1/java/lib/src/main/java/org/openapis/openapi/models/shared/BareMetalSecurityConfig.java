/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BareMetalSecurityConfig - Specifies the security related settings for the bare metal user cluster.
 */
public class BareMetalSecurityConfig {
    /**
     * Authorization defines the On-Prem cluster authorization configuration to bootstrap onto the admin cluster.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorization")
    public Authorization authorization;

    public BareMetalSecurityConfig withAuthorization(Authorization authorization) {
        this.authorization = authorization;
        return this;
    }
    
    public BareMetalSecurityConfig(){}
}
