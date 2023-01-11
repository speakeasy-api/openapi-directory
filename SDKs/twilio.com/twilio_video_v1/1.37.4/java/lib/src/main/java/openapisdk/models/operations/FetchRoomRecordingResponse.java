package openapisdk.models.operations;



public class FetchRoomRecordingResponse {
    public String contentType;
    public FetchRoomRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoomRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1RoomRoomRecording videoV1RoomRoomRecording;
    public FetchRoomRecordingResponse withVideoV1RoomRoomRecording(openapisdk.models.shared.VideoV1RoomRoomRecording videoV1RoomRoomRecording) {
        this.videoV1RoomRoomRecording = videoV1RoomRoomRecording;
        return this;
    }
}