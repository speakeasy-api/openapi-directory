/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum - The HTTP method to use when calling the `webhooks.on_message_update.url`.
 */
public enum UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    @JsonValue
    public final String value;

    private UpdateServiceUpdateServiceRequestWebhooksOnMessageUpdateMethodEnum(String value) {
        this.value = value;
    }
}
