package openapisdk.models.operations;



public class ListMediaRecordingResponse {
    public String contentType;
    public ListMediaRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListMediaRecordingListMediaRecordingResponse listMediaRecordingResponse;
    public ListMediaRecordingResponse withListMediaRecordingResponse(ListMediaRecordingListMediaRecordingResponse listMediaRecordingResponse) {
        this.listMediaRecordingResponse = listMediaRecordingResponse;
        return this;
    }
    public Long statusCode;
    public ListMediaRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}