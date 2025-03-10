/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * EntryPointHttpMethodEnum - The HTTP method used by the EntryPoint.
 */
public enum EntryPointHttpMethodEnum {
    GET("GET"),
    PUT("PUT"),
    POST("POST"),
    DELETE("DELETE");

    @JsonValue
    public final String value;

    private EntryPointHttpMethodEnum(String value) {
        this.value = value;
    }
}
