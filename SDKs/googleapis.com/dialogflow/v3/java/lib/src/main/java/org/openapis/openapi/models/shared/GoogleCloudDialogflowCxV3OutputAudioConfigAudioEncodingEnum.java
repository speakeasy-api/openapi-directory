/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum - Required. Audio encoding of the synthesized audio content.
 */
public enum GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum {
    OUTPUT_AUDIO_ENCODING_UNSPECIFIED("OUTPUT_AUDIO_ENCODING_UNSPECIFIED"),
    OUTPUT_AUDIO_ENCODING_LINEAR16("OUTPUT_AUDIO_ENCODING_LINEAR_16"),
    OUTPUT_AUDIO_ENCODING_MP3("OUTPUT_AUDIO_ENCODING_MP3"),
    OUTPUT_AUDIO_ENCODING_MP364_KBPS("OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"),
    OUTPUT_AUDIO_ENCODING_OGG_OPUS("OUTPUT_AUDIO_ENCODING_OGG_OPUS"),
    OUTPUT_AUDIO_ENCODING_MULAW("OUTPUT_AUDIO_ENCODING_MULAW");

    @JsonValue
    public final String value;

    private GoogleCloudDialogflowCxV3OutputAudioConfigAudioEncodingEnum(String value) {
        this.value = value;
    }
}
