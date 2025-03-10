/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * NodeStatusEnumEnum - Node status.
 */
public enum NodeStatusEnumEnum {
    UNKNOWN("UNKNOWN"),
    OK("OK"),
    BAD("BAD"),
    PRE_MAINTENANCE("PRE_MAINTENANCE"),
    MAINTENANCE("MAINTENANCE"),
    BOOTSTRAPPING("BOOTSTRAPPING"),
    UPGRADE("UPGRADE"),
    REMOVED("REMOVED");

    @JsonValue
    public final String value;

    private NodeStatusEnumEnum(String value) {
        this.value = value;
    }
}
