package openapisdk.models.operations;



public class FetchRoomParticipantResponse {
    public String contentType;
    public FetchRoomParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoomParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomParticipant videoV1RoomRoomParticipant;
    public FetchRoomParticipantResponse withVideoV1RoomRoomParticipant(openapisdk.models.shared.VideoV1RoomRoomParticipant videoV1RoomRoomParticipant) {
        this.videoV1RoomRoomParticipant = videoV1RoomRoomParticipant;
        return this;
    }
}