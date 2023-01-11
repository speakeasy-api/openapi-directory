package openapisdk.models.operations;



public class FetchRoomRecordingRuleResponse {
    public String contentType;
    public FetchRoomRecordingRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoomRecordingRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomRecordingRule videoV1RoomRoomRecordingRule;
    public FetchRoomRecordingRuleResponse withVideoV1RoomRoomRecordingRule(openapisdk.models.shared.VideoV1RoomRoomRecordingRule videoV1RoomRoomRecordingRule) {
        this.videoV1RoomRoomRecordingRule = videoV1RoomRoomRecordingRule;
        return this;
    }
}