/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowCxV3ResponseMessage - Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
 */
public class GoogleCloudDialogflowCxV3ResponseMessage {
    /**
     * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;

    public GoogleCloudDialogflowCxV3ResponseMessage withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    
    /**
     * Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationSuccess")
    public GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess conversationSuccess;

    public GoogleCloudDialogflowCxV3ResponseMessage withConversationSuccess(GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess conversationSuccess) {
        this.conversationSuccess = conversationSuccess;
        return this;
    }
    
    /**
     * Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endInteraction")
    public java.util.Map<String, Object> endInteraction;

    public GoogleCloudDialogflowCxV3ResponseMessage withEndInteraction(java.util.Map<String, Object> endInteraction) {
        this.endInteraction = endInteraction;
        return this;
    }
    
    /**
     * Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveAgentHandoff")
    public GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff liveAgentHandoff;

    public GoogleCloudDialogflowCxV3ResponseMessage withLiveAgentHandoff(GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff liveAgentHandoff) {
        this.liveAgentHandoff = liveAgentHandoff;
        return this;
    }
    
    /**
     * Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mixedAudio")
    public GoogleCloudDialogflowCxV3ResponseMessageMixedAudio mixedAudio;

    public GoogleCloudDialogflowCxV3ResponseMessage withMixedAudio(GoogleCloudDialogflowCxV3ResponseMessageMixedAudio mixedAudio) {
        this.mixedAudio = mixedAudio;
        return this;
    }
    
    /**
     * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputAudioText")
    public GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText outputAudioText;

    public GoogleCloudDialogflowCxV3ResponseMessage withOutputAudioText(GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText outputAudioText) {
        this.outputAudioText = outputAudioText;
        return this;
    }
    
    /**
     * Returns a response containing a custom, platform-specific payload.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public java.util.Map<String, Object> payload;

    public GoogleCloudDialogflowCxV3ResponseMessage withPayload(java.util.Map<String, Object> payload) {
        this.payload = payload;
        return this;
    }
    
    /**
     * Specifies an audio clip to be played by the client as part of the response.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playAudio")
    public GoogleCloudDialogflowCxV3ResponseMessagePlayAudio playAudio;

    public GoogleCloudDialogflowCxV3ResponseMessage withPlayAudio(GoogleCloudDialogflowCxV3ResponseMessagePlayAudio playAudio) {
        this.playAudio = playAudio;
        return this;
    }
    
    /**
     * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephonyTransferCall")
    public GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall telephonyTransferCall;

    public GoogleCloudDialogflowCxV3ResponseMessage withTelephonyTransferCall(GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall telephonyTransferCall) {
        this.telephonyTransferCall = telephonyTransferCall;
        return this;
    }
    
    /**
     * The text response message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public GoogleCloudDialogflowCxV3ResponseMessageText text;

    public GoogleCloudDialogflowCxV3ResponseMessage withText(GoogleCloudDialogflowCxV3ResponseMessageText text) {
        this.text = text;
        return this;
    }
    
    public GoogleCloudDialogflowCxV3ResponseMessage(){}
}
