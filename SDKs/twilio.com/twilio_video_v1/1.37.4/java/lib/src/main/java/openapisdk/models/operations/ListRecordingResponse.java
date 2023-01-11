package openapisdk.models.operations;



public class ListRecordingResponse {
    public String contentType;
    public ListRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListRecordingListRecordingResponse listRecordingResponse;
    public ListRecordingResponse withListRecordingResponse(ListRecordingListRecordingResponse listRecordingResponse) {
        this.listRecordingResponse = listRecordingResponse;
        return this;
    }
    public Long statusCode;
    public ListRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}