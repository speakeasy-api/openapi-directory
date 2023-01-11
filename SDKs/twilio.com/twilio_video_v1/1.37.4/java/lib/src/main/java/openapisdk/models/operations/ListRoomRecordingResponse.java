package openapisdk.models.operations;



public class ListRoomRecordingResponse {
    public String contentType;
    public ListRoomRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListRoomRecordingListRoomRecordingResponse listRoomRecordingResponse;
    public ListRoomRecordingResponse withListRoomRecordingResponse(ListRoomRecordingListRoomRecordingResponse listRoomRecordingResponse) {
        this.listRoomRecordingResponse = listRoomRecordingResponse;
        return this;
    }
    public Long statusCode;
    public ListRoomRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}