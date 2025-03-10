/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum - Required. Indicates whether the additional data should override or supplement the custom entity type definition.
 */
public enum GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum {
    ENTITY_OVERRIDE_MODE_UNSPECIFIED("ENTITY_OVERRIDE_MODE_UNSPECIFIED"),
    ENTITY_OVERRIDE_MODE_OVERRIDE("ENTITY_OVERRIDE_MODE_OVERRIDE"),
    ENTITY_OVERRIDE_MODE_SUPPLEMENT("ENTITY_OVERRIDE_MODE_SUPPLEMENT");

    @JsonValue
    public final String value;

    private GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum(String value) {
        this.value = value;
    }
}
