package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConversationMessageListConversationMessageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public openapisdk.models.shared.ConversationsV1ConversationConversationMessage[] messages;
    public ListConversationMessageListConversationMessageResponse withMessages(openapisdk.models.shared.ConversationsV1ConversationConversationMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConversationMessageListConversationMessageResponseMeta meta;
    public ListConversationMessageListConversationMessageResponse withMeta(ListConversationMessageListConversationMessageResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}