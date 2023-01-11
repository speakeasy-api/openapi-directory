package openapisdk.models.operations;



public class FetchRecordingResponse {
    public String contentType;
    public FetchRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountRecording apiV2010AccountRecording;
    public FetchRecordingResponse withApiV2010AccountRecording(openapisdk.models.shared.ApiV2010AccountRecording apiV2010AccountRecording) {
        this.apiV2010AccountRecording = apiV2010AccountRecording;
        return this;
    }
}