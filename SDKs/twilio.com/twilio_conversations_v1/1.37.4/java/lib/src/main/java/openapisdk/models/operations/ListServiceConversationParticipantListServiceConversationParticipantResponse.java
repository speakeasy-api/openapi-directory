package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceConversationParticipantListServiceConversationParticipantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceConversationParticipantListServiceConversationParticipantResponseMeta meta;
    public ListServiceConversationParticipantListServiceConversationParticipantResponse withMeta(ListServiceConversationParticipantListServiceConversationParticipantResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant[] participants;
    public ListServiceConversationParticipantListServiceConversationParticipantResponse withParticipants(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant[] participants) {
        this.participants = participants;
        return this;
    }
}