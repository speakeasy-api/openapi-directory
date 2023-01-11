package openapisdk.models.operations;



public class UpdateRoomRecordingRuleResponse {
    public String contentType;
    public UpdateRoomRecordingRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoomRecordingRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomRecordingRule videoV1RoomRoomRecordingRule;
    public UpdateRoomRecordingRuleResponse withVideoV1RoomRoomRecordingRule(openapisdk.models.shared.VideoV1RoomRoomRecordingRule videoV1RoomRoomRecordingRule) {
        this.videoV1RoomRoomRecordingRule = videoV1RoomRoomRecordingRule;
        return this;
    }
}