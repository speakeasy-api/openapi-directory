package openapisdk.models.operations;



public class SandboxProcessorTokenCreateResponse {
    public String contentType;
    public SandboxProcessorTokenCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SandboxProcessorTokenCreateResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> sandboxProcessorTokenCreateResponse;
    public SandboxProcessorTokenCreateResponse withSandboxProcessorTokenCreateResponse(java.util.Map<String, Object> sandboxProcessorTokenCreateResponse) {
        this.sandboxProcessorTokenCreateResponse = sandboxProcessorTokenCreateResponse;
        return this;
    }
    public Long statusCode;
    public SandboxProcessorTokenCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}