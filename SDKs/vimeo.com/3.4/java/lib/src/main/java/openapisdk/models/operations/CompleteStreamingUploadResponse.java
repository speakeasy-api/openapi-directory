package openapisdk.models.operations;



public class CompleteStreamingUploadResponse {
    public String contentType;
    public CompleteStreamingUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CompleteStreamingUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CompleteStreamingUploadResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}