/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    @JsonValue
    public final String value;

    private UpdateServiceUpdateServiceRequestWebhooksOnMemberAddMethodEnum(String value) {
        this.value = value;
    }
}
