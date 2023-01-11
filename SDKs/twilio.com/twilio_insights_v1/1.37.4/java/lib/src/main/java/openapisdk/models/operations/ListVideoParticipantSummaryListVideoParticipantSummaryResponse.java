package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVideoParticipantSummaryListVideoParticipantSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta meta;
    public ListVideoParticipantSummaryListVideoParticipantSummaryResponse withMeta(ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public openapisdk.models.shared.InsightsV1VideoRoomSummaryVideoParticipantSummary[] participants;
    public ListVideoParticipantSummaryListVideoParticipantSummaryResponse withParticipants(openapisdk.models.shared.InsightsV1VideoRoomSummaryVideoParticipantSummary[] participants) {
        this.participants = participants;
        return this;
    }
}