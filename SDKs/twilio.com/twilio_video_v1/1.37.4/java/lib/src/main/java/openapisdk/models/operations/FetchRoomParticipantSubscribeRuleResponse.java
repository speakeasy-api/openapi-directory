package openapisdk.models.operations;



public class FetchRoomParticipantSubscribeRuleResponse {
    public String contentType;
    public FetchRoomParticipantSubscribeRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoomParticipantSubscribeRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule videoV1RoomRoomParticipantRoomParticipantSubscribeRule;
    public FetchRoomParticipantSubscribeRuleResponse withVideoV1RoomRoomParticipantRoomParticipantSubscribeRule(openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule videoV1RoomRoomParticipantRoomParticipantSubscribeRule) {
        this.videoV1RoomRoomParticipantRoomParticipantSubscribeRule = videoV1RoomRoomParticipantRoomParticipantSubscribeRule;
        return this;
    }
}