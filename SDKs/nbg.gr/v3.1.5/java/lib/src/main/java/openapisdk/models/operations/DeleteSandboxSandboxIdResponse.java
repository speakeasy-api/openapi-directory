package openapisdk.models.operations;



public class DeleteSandboxSandboxIdResponse {
    public String contentType;
    public DeleteSandboxSandboxIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteSandboxSandboxIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteSandboxSandboxIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}