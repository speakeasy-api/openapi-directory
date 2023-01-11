package openapisdk.models.operations;



public class UpdateCallRecordingResponse {
    public String contentType;
    public UpdateCallRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCallRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallCallRecording apiV2010AccountCallCallRecording;
    public UpdateCallRecordingResponse withApiV2010AccountCallCallRecording(openapisdk.models.shared.ApiV2010AccountCallCallRecording apiV2010AccountCallCallRecording) {
        this.apiV2010AccountCallCallRecording = apiV2010AccountCallCallRecording;
        return this;
    }
}