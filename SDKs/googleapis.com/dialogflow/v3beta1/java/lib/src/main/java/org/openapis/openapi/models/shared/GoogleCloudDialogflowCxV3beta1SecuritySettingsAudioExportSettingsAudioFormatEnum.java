/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum - File format for exported audio file. Currently only in telephony recordings.
 */
public enum GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum {
    AUDIO_FORMAT_UNSPECIFIED("AUDIO_FORMAT_UNSPECIFIED"),
    MULAW("MULAW"),
    MP3("MP3"),
    OGG("OGG");

    @JsonValue
    public final String value;

    private GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum(String value) {
        this.value = value;
    }
}
