package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRoomParticipantListRoomParticipantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRoomParticipantListRoomParticipantResponseMeta meta;
    public ListRoomParticipantListRoomParticipantResponse withMeta(ListRoomParticipantListRoomParticipantResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public openapisdk.models.shared.VideoV1RoomRoomParticipant[] participants;
    public ListRoomParticipantListRoomParticipantResponse withParticipants(openapisdk.models.shared.VideoV1RoomRoomParticipant[] participants) {
        this.participants = participants;
        return this;
    }
}