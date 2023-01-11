package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta meta;
    public ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse withMeta(ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribed_tracks")
    public openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack[] subscribedTracks;
    public ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse withSubscribedTracks(openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack[] subscribedTracks) {
        this.subscribedTracks = subscribedTracks;
        return this;
    }
}