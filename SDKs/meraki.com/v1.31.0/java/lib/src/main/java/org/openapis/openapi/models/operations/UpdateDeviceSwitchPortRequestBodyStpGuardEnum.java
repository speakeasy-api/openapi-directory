/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateDeviceSwitchPortRequestBodyStpGuardEnum - The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard').
 */
public enum UpdateDeviceSwitchPortRequestBodyStpGuardEnum {
    BPDU_GUARD("bpdu guard"),
    DISABLED("disabled"),
    LOOP_GUARD("loop guard"),
    ROOT_GUARD("root guard");

    @JsonValue
    public final String value;

    private UpdateDeviceSwitchPortRequestBodyStpGuardEnum(String value) {
        this.value = value;
    }
}
