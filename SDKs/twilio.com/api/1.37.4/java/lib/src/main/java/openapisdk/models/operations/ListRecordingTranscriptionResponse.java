package openapisdk.models.operations;



public class ListRecordingTranscriptionResponse {
    public String contentType;
    public ListRecordingTranscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListRecordingTranscriptionListRecordingTranscriptionResponse listRecordingTranscriptionResponse;
    public ListRecordingTranscriptionResponse withListRecordingTranscriptionResponse(ListRecordingTranscriptionListRecordingTranscriptionResponse listRecordingTranscriptionResponse) {
        this.listRecordingTranscriptionResponse = listRecordingTranscriptionResponse;
        return this;
    }
    public Long statusCode;
    public ListRecordingTranscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}