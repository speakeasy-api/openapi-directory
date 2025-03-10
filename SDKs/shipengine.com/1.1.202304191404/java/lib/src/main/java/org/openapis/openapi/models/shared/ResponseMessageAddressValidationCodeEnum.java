/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ResponseMessageAddressValidationCodeEnum - The error codes that can be returned by the address validation API
 */
public enum ResponseMessageAddressValidationCodeEnum {
    A1000("a1000"),
    A1001("a1001"),
    A1002("a1002"),
    A1003("a1003"),
    A1004("a1004"),
    A1005("a1005"),
    A1006("a1006"),
    A1007("a1007"),
    A1008("a1008"),
    R1000("r1000"),
    R1001("r1001"),
    R1002("r1002"),
    R1003("r1003");

    @JsonValue
    public final String value;

    private ResponseMessageAddressValidationCodeEnum(String value) {
        this.value = value;
    }
}
