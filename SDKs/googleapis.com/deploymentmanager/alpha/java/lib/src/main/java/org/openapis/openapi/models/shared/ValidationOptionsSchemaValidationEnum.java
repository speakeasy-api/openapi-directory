/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ValidationOptionsSchemaValidationEnum - Customize how deployment manager will validate the resource against schema errors.
 */
public enum ValidationOptionsSchemaValidationEnum {
    UNKNOWN("UNKNOWN"),
    IGNORE("IGNORE"),
    IGNORE_WITH_WARNINGS("IGNORE_WITH_WARNINGS"),
    FAIL("FAIL");

    @JsonValue
    public final String value;

    private ValidationOptionsSchemaValidationEnum(String value) {
        this.value = value;
    }
}
