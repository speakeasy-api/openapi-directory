/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UnaryFilterOpEnum - The unary operator to apply.
 */
public enum UnaryFilterOpEnum {
    OPERATOR_UNSPECIFIED("OPERATOR_UNSPECIFIED"),
    IS_NAN("IS_NAN"),
    IS_NULL("IS_NULL"),
    IS_NOT_NAN("IS_NOT_NAN"),
    IS_NOT_NULL("IS_NOT_NULL");

    @JsonValue
    public final String value;

    private UnaryFilterOpEnum(String value) {
        this.value = value;
    }
}
