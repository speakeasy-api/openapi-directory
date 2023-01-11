package openapisdk.models.operations;



public class UpdateRoomParticipantSubscribeRuleResponse {
    public String contentType;
    public UpdateRoomParticipantSubscribeRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoomParticipantSubscribeRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule videoV1RoomRoomParticipantRoomParticipantSubscribeRule;
    public UpdateRoomParticipantSubscribeRuleResponse withVideoV1RoomRoomParticipantRoomParticipantSubscribeRule(openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule videoV1RoomRoomParticipantRoomParticipantSubscribeRule) {
        this.videoV1RoomRoomParticipantRoomParticipantSubscribeRule = videoV1RoomRoomParticipantRoomParticipantSubscribeRule;
        return this;
    }
}