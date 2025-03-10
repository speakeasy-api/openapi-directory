/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * MessageCode404PISEnum - Message codes defined for PIS for HTTP Error code 404 (NOT FOUND).
 */
public enum MessageCode404PISEnum {
    RESOURCE_UNKNOWN("RESOURCE_UNKNOWN"),
    PRODUCT_UNKNOWN("PRODUCT_UNKNOWN");

    @JsonValue
    public final String value;

    private MessageCode404PISEnum(String value) {
        this.value = value;
    }
}
