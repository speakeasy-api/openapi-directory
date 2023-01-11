package openapisdk.models.operations;



public class UpdateRoomParticipantResponse {
    public String contentType;
    public UpdateRoomParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoomParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomParticipant videoV1RoomRoomParticipant;
    public UpdateRoomParticipantResponse withVideoV1RoomRoomParticipant(openapisdk.models.shared.VideoV1RoomRoomParticipant videoV1RoomRoomParticipant) {
        this.videoV1RoomRoomParticipant = videoV1RoomRoomParticipant;
        return this;
    }
}