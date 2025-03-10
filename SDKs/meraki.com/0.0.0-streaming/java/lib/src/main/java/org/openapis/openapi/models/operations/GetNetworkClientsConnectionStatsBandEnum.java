/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetNetworkClientsConnectionStatsBandEnum - Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
 */
public enum GetNetworkClientsConnectionStatsBandEnum {
    TWO4("2.4"),
    FIVE("5");

    @JsonValue
    public final String value;

    private GetNetworkClientsConnectionStatsBandEnum(String value) {
        this.value = value;
    }
}
