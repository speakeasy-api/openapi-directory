/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowV2SuggestSmartRepliesRequest - The request message for Participants.SuggestSmartReplies.
 */
public class GoogleCloudDialogflowV2SuggestSmartRepliesRequest {
    /**
     * Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. By default 20 and at most 50.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextSize")
    public Integer contextSize;

    public GoogleCloudDialogflowV2SuggestSmartRepliesRequest withContextSize(Integer contextSize) {
        this.contextSize = contextSize;
        return this;
    }
    
    /**
     * ============================================================================ Auxiliary proto messages. Represents the natural language text to be processed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentTextInput")
    public GoogleCloudDialogflowV2TextInput currentTextInput;

    public GoogleCloudDialogflowV2SuggestSmartRepliesRequest withCurrentTextInput(GoogleCloudDialogflowV2TextInput currentTextInput) {
        this.currentTextInput = currentTextInput;
        return this;
    }
    
    /**
     * The name of the latest conversation message to compile suggestion for. If empty, it will be the latest message of the conversation. Format: `projects//locations//conversations//messages/`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestMessage")
    public String latestMessage;

    public GoogleCloudDialogflowV2SuggestSmartRepliesRequest withLatestMessage(String latestMessage) {
        this.latestMessage = latestMessage;
        return this;
    }
    
    public GoogleCloudDialogflowV2SuggestSmartRepliesRequest(){}
}
