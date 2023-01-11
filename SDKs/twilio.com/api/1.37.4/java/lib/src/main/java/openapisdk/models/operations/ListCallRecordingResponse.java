package openapisdk.models.operations;



public class ListCallRecordingResponse {
    public String contentType;
    public ListCallRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCallRecordingListCallRecordingResponse listCallRecordingResponse;
    public ListCallRecordingResponse withListCallRecordingResponse(ListCallRecordingListCallRecordingResponse listCallRecordingResponse) {
        this.listCallRecordingResponse = listCallRecordingResponse;
        return this;
    }
    public Long statusCode;
    public ListCallRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}