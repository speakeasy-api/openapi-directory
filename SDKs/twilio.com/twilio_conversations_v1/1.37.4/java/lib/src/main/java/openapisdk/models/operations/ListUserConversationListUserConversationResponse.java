package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUserConversationListUserConversationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversations")
    public openapisdk.models.shared.ConversationsV1UserUserConversation[] conversations;
    public ListUserConversationListUserConversationResponse withConversations(openapisdk.models.shared.ConversationsV1UserUserConversation[] conversations) {
        this.conversations = conversations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUserConversationListUserConversationResponseMeta meta;
    public ListUserConversationListUserConversationResponse withMeta(ListUserConversationListUserConversationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}