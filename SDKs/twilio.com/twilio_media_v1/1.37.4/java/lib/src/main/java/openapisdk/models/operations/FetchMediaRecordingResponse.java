package openapisdk.models.operations;



public class FetchMediaRecordingResponse {
    public String contentType;
    public FetchMediaRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMediaRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1MediaRecording mediaV1MediaRecording;
    public FetchMediaRecordingResponse withMediaV1MediaRecording(openapisdk.models.shared.MediaV1MediaRecording mediaV1MediaRecording) {
        this.mediaV1MediaRecording = mediaV1MediaRecording;
        return this;
    }
}