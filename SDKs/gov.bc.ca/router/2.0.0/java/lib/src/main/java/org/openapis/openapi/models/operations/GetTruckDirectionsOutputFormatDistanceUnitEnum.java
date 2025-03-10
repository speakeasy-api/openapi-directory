/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetTruckDirectionsOutputFormatDistanceUnitEnum - distance unit of measure (e.g., km, mi). Default is km.
 */
public enum GetTruckDirectionsOutputFormatDistanceUnitEnum {
    KM("km"),
    MI("mi");

    @JsonValue
    public final String value;

    private GetTruckDirectionsOutputFormatDistanceUnitEnum(String value) {
        this.value = value;
    }
}
