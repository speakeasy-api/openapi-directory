package openapisdk.models.operations;



public class UpdateRecordingResponse {
    public String contentType;
    public UpdateRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkRecording trunkingV1TrunkRecording;
    public UpdateRecordingResponse withTrunkingV1TrunkRecording(openapisdk.models.shared.TrunkingV1TrunkRecording trunkingV1TrunkRecording) {
        this.trunkingV1TrunkRecording = trunkingV1TrunkRecording;
        return this;
    }
}