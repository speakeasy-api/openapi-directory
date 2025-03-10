/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * RatesInformationRateRateTypeEnum - The possible rate type values
 */
public enum RatesInformationRateRateTypeEnum {
    CHECK("check"),
    SHIPMENT("shipment");

    @JsonValue
    public final String value;

    private RatesInformationRateRateTypeEnum(String value) {
        this.value = value;
    }
}
