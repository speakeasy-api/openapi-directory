/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * InstanceConfigNetworkConfigEnum - The type of network configuration on the instance.
 */
public enum InstanceConfigNetworkConfigEnum {
    NETWORKCONFIG_UNSPECIFIED("NETWORKCONFIG_UNSPECIFIED"),
    SINGLE_VLAN("SINGLE_VLAN"),
    MULTI_VLAN("MULTI_VLAN");

    @JsonValue
    public final String value;

    private InstanceConfigNetworkConfigEnum(String value) {
        this.value = value;
    }
}
