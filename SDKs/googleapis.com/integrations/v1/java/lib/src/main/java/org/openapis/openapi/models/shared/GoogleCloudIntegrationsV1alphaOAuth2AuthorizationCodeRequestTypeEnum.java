/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum - Represent how to pass parameters to fetch access token
 */
public enum GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum {
    REQUEST_TYPE_UNSPECIFIED("REQUEST_TYPE_UNSPECIFIED"),
    REQUEST_BODY("REQUEST_BODY"),
    QUERY_PARAMETERS("QUERY_PARAMETERS"),
    ENCODED_HEADER("ENCODED_HEADER");

    @JsonValue
    public final String value;

    private GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum(String value) {
        this.value = value;
    }
}
