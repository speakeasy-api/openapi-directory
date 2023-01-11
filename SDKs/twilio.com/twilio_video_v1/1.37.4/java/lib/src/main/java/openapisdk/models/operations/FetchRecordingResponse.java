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
    public openapisdk.models.shared.VideoV1Recording videoV1Recording;
    public FetchRecordingResponse withVideoV1Recording(openapisdk.models.shared.VideoV1Recording videoV1Recording) {
        this.videoV1Recording = videoV1Recording;
        return this;
    }
}