package openapisdk.models.operations;



public class GetUploadAttemptResponse {
    public String contentType;
    public GetUploadAttemptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUploadAttemptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadAttempt uploadAttempt;
    public GetUploadAttemptResponse withUploadAttempt(openapisdk.models.shared.UploadAttempt uploadAttempt) {
        this.uploadAttempt = uploadAttempt;
        return this;
    }
}