/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum - Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
 */
public enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum {
    ENHANCED("Enhanced"),
    HIGH("High"),
    STANDARD("Standard");

    @JsonValue
    public final String value;

    private UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum(String value) {
        this.value = value;
    }
}
