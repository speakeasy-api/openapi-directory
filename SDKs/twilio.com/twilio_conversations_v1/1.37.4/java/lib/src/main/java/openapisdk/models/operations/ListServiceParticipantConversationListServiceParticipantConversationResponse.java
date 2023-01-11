package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceParticipantConversationListServiceParticipantConversationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversations")
    public openapisdk.models.shared.ConversationsV1ServiceServiceParticipantConversation[] conversations;
    public ListServiceParticipantConversationListServiceParticipantConversationResponse withConversations(openapisdk.models.shared.ConversationsV1ServiceServiceParticipantConversation[] conversations) {
        this.conversations = conversations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceParticipantConversationListServiceParticipantConversationResponseMeta meta;
    public ListServiceParticipantConversationListServiceParticipantConversationResponse withMeta(ListServiceParticipantConversationListServiceParticipantConversationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}