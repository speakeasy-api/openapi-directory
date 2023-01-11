package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListParticipantConversationListParticipantConversationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversations")
    public openapisdk.models.shared.ConversationsV1ParticipantConversation[] conversations;
    public ListParticipantConversationListParticipantConversationResponse withConversations(openapisdk.models.shared.ConversationsV1ParticipantConversation[] conversations) {
        this.conversations = conversations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListParticipantConversationListParticipantConversationResponseMeta meta;
    public ListParticipantConversationListParticipantConversationResponse withMeta(ListParticipantConversationListParticipantConversationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}