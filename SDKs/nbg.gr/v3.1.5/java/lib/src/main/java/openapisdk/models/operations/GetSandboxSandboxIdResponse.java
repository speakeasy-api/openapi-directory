package openapisdk.models.operations;



public class GetSandboxSandboxIdResponse {
    public String contentType;
    public GetSandboxSandboxIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetSandboxSandboxIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.Sandbox sandbox;
    public GetSandboxSandboxIdResponse withSandbox(openapisdk.models.shared.Sandbox sandbox) {
        this.sandbox = sandbox;
        return this;
    }
    public Long statusCode;
    public GetSandboxSandboxIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}