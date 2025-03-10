/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum - Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
 */
public enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum {
    ENHANCED("Enhanced"),
    HIGH("High"),
    STANDARD("Standard");

    @JsonValue
    public final String value;

    private CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum(String value) {
        this.value = value;
    }
}
