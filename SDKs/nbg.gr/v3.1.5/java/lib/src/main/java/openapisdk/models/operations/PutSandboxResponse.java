package openapisdk.models.operations;



public class PutSandboxResponse {
    public String contentType;
    public PutSandboxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PutSandboxResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PutSandboxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}