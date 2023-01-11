package openapisdk.models.operations;



public class SandboxPublicTokenCreateResponse {
    public String contentType;
    public SandboxPublicTokenCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SandboxPublicTokenCreateResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> sandboxPublicTokenCreateResponse;
    public SandboxPublicTokenCreateResponse withSandboxPublicTokenCreateResponse(java.util.Map<String, Object> sandboxPublicTokenCreateResponse) {
        this.sandboxPublicTokenCreateResponse = sandboxPublicTokenCreateResponse;
        return this;
    }
    public Long statusCode;
    public SandboxPublicTokenCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}