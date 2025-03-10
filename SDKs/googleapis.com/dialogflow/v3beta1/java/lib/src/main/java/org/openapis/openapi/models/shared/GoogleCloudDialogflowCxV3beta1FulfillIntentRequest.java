/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowCxV3beta1FulfillIntentRequest - Request of FulfillIntent
 */
public class GoogleCloudDialogflowCxV3beta1FulfillIntentRequest {
    /**
     * Represents one match result of MatchIntent.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public GoogleCloudDialogflowCxV3beta1Match match;

    public GoogleCloudDialogflowCxV3beta1FulfillIntentRequest withMatch(GoogleCloudDialogflowCxV3beta1Match match) {
        this.match = match;
        return this;
    }
    
    /**
     * Request of MatchIntent.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchIntentRequest")
    public GoogleCloudDialogflowCxV3beta1MatchIntentRequest matchIntentRequest;

    public GoogleCloudDialogflowCxV3beta1FulfillIntentRequest withMatchIntentRequest(GoogleCloudDialogflowCxV3beta1MatchIntentRequest matchIntentRequest) {
        this.matchIntentRequest = matchIntentRequest;
        return this;
    }
    
    /**
     * Instructs the speech synthesizer how to generate the output audio content.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputAudioConfig")
    public GoogleCloudDialogflowCxV3beta1OutputAudioConfig outputAudioConfig;

    public GoogleCloudDialogflowCxV3beta1FulfillIntentRequest withOutputAudioConfig(GoogleCloudDialogflowCxV3beta1OutputAudioConfig outputAudioConfig) {
        this.outputAudioConfig = outputAudioConfig;
        return this;
    }
    
    public GoogleCloudDialogflowCxV3beta1FulfillIntentRequest(){}
}
