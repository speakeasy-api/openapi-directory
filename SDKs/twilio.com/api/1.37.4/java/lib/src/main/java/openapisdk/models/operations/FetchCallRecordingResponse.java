package openapisdk.models.operations;



public class FetchCallRecordingResponse {
    public String contentType;
    public FetchCallRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCallRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallCallRecording apiV2010AccountCallCallRecording;
    public FetchCallRecordingResponse withApiV2010AccountCallCallRecording(openapisdk.models.shared.ApiV2010AccountCallCallRecording apiV2010AccountCallCallRecording) {
        this.apiV2010AccountCallCallRecording = apiV2010AccountCallCallRecording;
        return this;
    }
}