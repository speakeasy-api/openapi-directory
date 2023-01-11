package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConferenceParticipantListConferenceParticipantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConferenceParticipantListConferenceParticipantResponseMeta meta;
    public ListConferenceParticipantListConferenceParticipantResponse withMeta(ListConferenceParticipantListConferenceParticipantResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public openapisdk.models.shared.InsightsV1ConferenceConferenceParticipant[] participants;
    public ListConferenceParticipantListConferenceParticipantResponse withParticipants(openapisdk.models.shared.InsightsV1ConferenceConferenceParticipant[] participants) {
        this.participants = participants;
        return this;
    }
}