package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceConversationListServiceConversationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversations")
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversation[] conversations;
    public ListServiceConversationListServiceConversationResponse withConversations(openapisdk.models.shared.ConversationsV1ServiceServiceConversation[] conversations) {
        this.conversations = conversations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceConversationListServiceConversationResponseMeta meta;
    public ListServiceConversationListServiceConversationResponse withMeta(ListServiceConversationListServiceConversationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}