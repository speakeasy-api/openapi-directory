package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceConversationMessageListServiceConversationMessageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage[] messages;
    public ListServiceConversationMessageListServiceConversationMessageResponse withMessages(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceConversationMessageListServiceConversationMessageResponseMeta meta;
    public ListServiceConversationMessageListServiceConversationMessageResponse withMeta(ListServiceConversationMessageListServiceConversationMessageResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}