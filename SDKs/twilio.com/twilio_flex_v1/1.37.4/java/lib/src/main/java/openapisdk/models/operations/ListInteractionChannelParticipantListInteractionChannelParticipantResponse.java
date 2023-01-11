package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInteractionChannelParticipantListInteractionChannelParticipantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta meta;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponse withMeta(ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant[] participants;
    public ListInteractionChannelParticipantListInteractionChannelParticipantResponse withParticipants(openapisdk.models.shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant[] participants) {
        this.participants = participants;
        return this;
    }
}