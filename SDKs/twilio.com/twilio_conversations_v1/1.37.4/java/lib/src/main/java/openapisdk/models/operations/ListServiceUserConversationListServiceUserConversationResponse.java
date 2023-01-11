package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceUserConversationListServiceUserConversationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversations")
    public openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation[] conversations;
    public ListServiceUserConversationListServiceUserConversationResponse withConversations(openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation[] conversations) {
        this.conversations = conversations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceUserConversationListServiceUserConversationResponseMeta meta;
    public ListServiceUserConversationListServiceUserConversationResponse withMeta(ListServiceUserConversationListServiceUserConversationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}