package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta meta;
    public ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse withMeta(ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_tracks")
    public openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack[] publishedTracks;
    public ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse withPublishedTracks(openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack[] publishedTracks) {
        this.publishedTracks = publishedTracks;
        return this;
    }
}