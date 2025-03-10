/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * NumericFilterOperationEnum - The operation type for this filter.
 */
public enum NumericFilterOperationEnum {
    OPERATION_UNSPECIFIED("OPERATION_UNSPECIFIED"),
    EQUAL("EQUAL"),
    LESS_THAN("LESS_THAN"),
    LESS_THAN_OR_EQUAL("LESS_THAN_OR_EQUAL"),
    GREATER_THAN("GREATER_THAN"),
    GREATER_THAN_OR_EQUAL("GREATER_THAN_OR_EQUAL");

    @JsonValue
    public final String value;

    private NumericFilterOperationEnum(String value) {
        this.value = value;
    }
}
