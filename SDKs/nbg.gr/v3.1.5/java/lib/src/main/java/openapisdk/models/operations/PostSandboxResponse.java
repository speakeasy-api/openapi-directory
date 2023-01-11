package openapisdk.models.operations;



public class PostSandboxResponse {
    public String contentType;
    public PostSandboxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostSandboxResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.Sandbox sandbox;
    public PostSandboxResponse withSandbox(openapisdk.models.shared.Sandbox sandbox) {
        this.sandbox = sandbox;
        return this;
    }
    public Long statusCode;
    public PostSandboxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}