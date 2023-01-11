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
    public openapisdk.models.shared.TrunkingV1TrunkRecording trunkingV1TrunkRecording;
    public FetchRecordingResponse withTrunkingV1TrunkRecording(openapisdk.models.shared.TrunkingV1TrunkRecording trunkingV1TrunkRecording) {
        this.trunkingV1TrunkRecording = trunkingV1TrunkRecording;
        return this;
    }
}