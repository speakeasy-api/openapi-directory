/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * NodeGroupMaintenanceIntervalEnum - Specifies the frequency of planned maintenance events. The accepted values are: `AS_NEEDED` and `RECURRENT`.
 */
public enum NodeGroupMaintenanceIntervalEnum {
    AS_NEEDED("AS_NEEDED"),
    PERIODIC("PERIODIC"),
    RECURRENT("RECURRENT");

    @JsonValue
    public final String value;

    private NodeGroupMaintenanceIntervalEnum(String value) {
        this.value = value;
    }
}
