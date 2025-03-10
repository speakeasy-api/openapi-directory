/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum - Indicates the activity state the client
 */
public enum GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum {
    CLIENT_STATE_UNSPECIFIED("CLIENT_STATE_UNSPECIFIED"),
    CLIENT_STATE_ACTIVE("CLIENT_STATE_ACTIVE"),
    CLIENT_STATE_DISABLED("CLIENT_STATE_DISABLED");

    @JsonValue
    public final String value;

    private GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum(String value) {
        this.value = value;
    }
}
