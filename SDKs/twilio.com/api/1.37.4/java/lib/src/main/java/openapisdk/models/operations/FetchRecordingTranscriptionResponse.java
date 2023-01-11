package openapisdk.models.operations;



public class FetchRecordingTranscriptionResponse {
    public String contentType;
    public FetchRecordingTranscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRecordingTranscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountRecordingRecordingTranscription apiV2010AccountRecordingRecordingTranscription;
    public FetchRecordingTranscriptionResponse withApiV2010AccountRecordingRecordingTranscription(openapisdk.models.shared.ApiV2010AccountRecordingRecordingTranscription apiV2010AccountRecordingRecordingTranscription) {
        this.apiV2010AccountRecordingRecordingTranscription = apiV2010AccountRecordingRecordingTranscription;
        return this;
    }
}