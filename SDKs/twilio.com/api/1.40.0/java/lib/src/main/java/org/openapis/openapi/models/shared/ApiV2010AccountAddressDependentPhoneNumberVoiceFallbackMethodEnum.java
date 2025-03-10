/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum - The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
public enum ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    @JsonValue
    public final String value;

    private ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum(String value) {
        this.value = value;
    }
}
