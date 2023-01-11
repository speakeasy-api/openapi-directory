package openapisdk.models.operations;



public class ReposCreateReleaseResponse {
    public String contentType;
    public ReposCreateReleaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateReleaseResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateReleaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Release release;
    public ReposCreateReleaseResponse withRelease(openapisdk.models.shared.Release release) {
        this.release = release;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateReleaseResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}