/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * NetworkStateEnum - The Network state.
 */
public enum NetworkStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PROVISIONING("PROVISIONING"),
    PROVISIONED("PROVISIONED"),
    DEPROVISIONING("DEPROVISIONING"),
    UPDATING("UPDATING");

    @JsonValue
    public final String value;

    private NetworkStateEnum(String value) {
        this.value = value;
    }
}
