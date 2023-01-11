package openapisdk.models.operations;



public class FetchRoomParticipantPublishedTrackResponse {
    public String contentType;
    public FetchRoomParticipantPublishedTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoomParticipantPublishedTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack videoV1RoomRoomParticipantRoomParticipantPublishedTrack;
    public FetchRoomParticipantPublishedTrackResponse withVideoV1RoomRoomParticipantRoomParticipantPublishedTrack(openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack videoV1RoomRoomParticipantRoomParticipantPublishedTrack) {
        this.videoV1RoomRoomParticipantRoomParticipantPublishedTrack = videoV1RoomRoomParticipantRoomParticipantPublishedTrack;
        return this;
    }
}