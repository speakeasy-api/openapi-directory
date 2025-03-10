/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowCxV3AudioInput - Represents the natural speech audio to be processed.
 */
public class GoogleCloudDialogflowCxV3AudioInput {
    /**
     * The natural language speech audio to be processed. A single request can contain up to 2 minutes of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public String audio;

    public GoogleCloudDialogflowCxV3AudioInput withAudio(String audio) {
        this.audio = audio;
        return this;
    }
    
    /**
     * Instructs the speech recognizer on how to process the audio content.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GoogleCloudDialogflowCxV3InputAudioConfig config;

    public GoogleCloudDialogflowCxV3AudioInput withConfig(GoogleCloudDialogflowCxV3InputAudioConfig config) {
        this.config = config;
        return this;
    }
    
    public GoogleCloudDialogflowCxV3AudioInput(){}
}
