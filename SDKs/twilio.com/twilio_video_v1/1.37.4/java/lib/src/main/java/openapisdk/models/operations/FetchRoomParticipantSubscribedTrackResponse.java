package openapisdk.models.operations;



public class FetchRoomParticipantSubscribedTrackResponse {
    public String contentType;
    public FetchRoomParticipantSubscribedTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoomParticipantSubscribedTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack videoV1RoomRoomParticipantRoomParticipantSubscribedTrack;
    public FetchRoomParticipantSubscribedTrackResponse withVideoV1RoomRoomParticipantRoomParticipantSubscribedTrack(openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack videoV1RoomRoomParticipantRoomParticipantSubscribedTrack) {
        this.videoV1RoomRoomParticipantRoomParticipantSubscribedTrack = videoV1RoomRoomParticipantRoomParticipantSubscribedTrack;
        return this;
    }
}