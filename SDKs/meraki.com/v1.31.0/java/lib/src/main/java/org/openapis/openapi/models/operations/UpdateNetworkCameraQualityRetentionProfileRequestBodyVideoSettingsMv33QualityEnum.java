/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum - Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
 */
public enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum {
    ENHANCED("Enhanced"),
    HIGH("High"),
    STANDARD("Standard");

    @JsonValue
    public final String value;

    private UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv33QualityEnum(String value) {
        this.value = value;
    }
}
