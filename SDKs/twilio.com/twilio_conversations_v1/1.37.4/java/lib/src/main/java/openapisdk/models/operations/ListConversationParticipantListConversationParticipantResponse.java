package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConversationParticipantListConversationParticipantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConversationParticipantListConversationParticipantResponseMeta meta;
    public ListConversationParticipantListConversationParticipantResponse withMeta(ListConversationParticipantListConversationParticipantResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public openapisdk.models.shared.ConversationsV1ConversationConversationParticipant[] participants;
    public ListConversationParticipantListConversationParticipantResponse withParticipants(openapisdk.models.shared.ConversationsV1ConversationConversationParticipant[] participants) {
        this.participants = participants;
        return this;
    }
}