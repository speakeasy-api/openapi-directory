/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * KioskCustomizationDeviceSettingsEnum - Specifies whether the Settings app is allowed in kiosk mode.
 */
public enum KioskCustomizationDeviceSettingsEnum {
    DEVICE_SETTINGS_UNSPECIFIED("DEVICE_SETTINGS_UNSPECIFIED"),
    SETTINGS_ACCESS_ALLOWED("SETTINGS_ACCESS_ALLOWED"),
    SETTINGS_ACCESS_BLOCKED("SETTINGS_ACCESS_BLOCKED");

    @JsonValue
    public final String value;

    private KioskCustomizationDeviceSettingsEnum(String value) {
        this.value = value;
    }
}
