/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * PartialAddressAddressResidentialIndicatorEnum - Indicates whether an address is residential.
 */
public enum PartialAddressAddressResidentialIndicatorEnum {
    UNKNOWN("unknown"),
    YES("yes"),
    NO("no");

    @JsonValue
    public final String value;

    private PartialAddressAddressResidentialIndicatorEnum(String value) {
        this.value = value;
    }
}
