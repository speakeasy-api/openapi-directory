package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConversationListConversationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversations")
    public openapisdk.models.shared.ConversationsV1Conversation[] conversations;
    public ListConversationListConversationResponse withConversations(openapisdk.models.shared.ConversationsV1Conversation[] conversations) {
        this.conversations = conversations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConversationListConversationResponseMeta meta;
    public ListConversationListConversationResponse withMeta(ListConversationListConversationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}