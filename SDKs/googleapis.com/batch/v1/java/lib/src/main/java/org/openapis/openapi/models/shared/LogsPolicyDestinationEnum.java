/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * LogsPolicyDestinationEnum - Where logs should be saved.
 */
public enum LogsPolicyDestinationEnum {
    DESTINATION_UNSPECIFIED("DESTINATION_UNSPECIFIED"),
    CLOUD_LOGGING("CLOUD_LOGGING"),
    PATH("PATH");

    @JsonValue
    public final String value;

    private LogsPolicyDestinationEnum(String value) {
        this.value = value;
    }
}
