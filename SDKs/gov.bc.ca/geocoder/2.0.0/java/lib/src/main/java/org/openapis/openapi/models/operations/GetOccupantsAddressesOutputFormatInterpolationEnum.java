/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetOccupantsAddressesOutputFormatInterpolationEnum - accessPoint interpolation method. See &lt;a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank"&gt;interpolation&lt;/a&gt;
 */
public enum GetOccupantsAddressesOutputFormatInterpolationEnum {
    ADAPTIVE("adaptive"),
    LINEAR("linear"),
    NONE("none");

    @JsonValue
    public final String value;

    private GetOccupantsAddressesOutputFormatInterpolationEnum(String value) {
        this.value = value;
    }
}
