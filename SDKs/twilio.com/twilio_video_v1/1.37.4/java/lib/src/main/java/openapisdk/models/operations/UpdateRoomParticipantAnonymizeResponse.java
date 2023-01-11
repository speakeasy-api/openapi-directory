package openapisdk.models.operations;



public class UpdateRoomParticipantAnonymizeResponse {
    public String contentType;
    public UpdateRoomParticipantAnonymizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoomParticipantAnonymizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize videoV1RoomRoomParticipantRoomParticipantAnonymize;
    public UpdateRoomParticipantAnonymizeResponse withVideoV1RoomRoomParticipantRoomParticipantAnonymize(openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize videoV1RoomRoomParticipantRoomParticipantAnonymize) {
        this.videoV1RoomRoomParticipantRoomParticipantAnonymize = videoV1RoomRoomParticipantRoomParticipantAnonymize;
        return this;
    }
}