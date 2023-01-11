package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListParticipantListParticipantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListParticipantListParticipantResponseMeta meta;
    public ListParticipantListParticipantResponse withMeta(ListParticipantListParticipantResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public openapisdk.models.shared.ProxyV1ServiceSessionParticipant[] participants;
    public ListParticipantListParticipantResponse withParticipants(openapisdk.models.shared.ProxyV1ServiceSessionParticipant[] participants) {
        this.participants = participants;
        return this;
    }
}