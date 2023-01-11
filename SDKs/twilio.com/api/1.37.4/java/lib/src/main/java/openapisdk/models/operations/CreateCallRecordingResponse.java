package openapisdk.models.operations;



public class CreateCallRecordingResponse {
    public String contentType;
    public CreateCallRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCallRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallCallRecording apiV2010AccountCallCallRecording;
    public CreateCallRecordingResponse withApiV2010AccountCallCallRecording(openapisdk.models.shared.ApiV2010AccountCallCallRecording apiV2010AccountCallCallRecording) {
        this.apiV2010AccountCallCallRecording = apiV2010AccountCallCallRecording;
        return this;
    }
}