package openapisdk.models.operations;



public class SandboxItemSetVerificationStatusResponse {
    public String contentType;
    public SandboxItemSetVerificationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> sandboxItemSetVerificationStatusResponse;
    public SandboxItemSetVerificationStatusResponse withSandboxItemSetVerificationStatusResponse(java.util.Map<String, Object> sandboxItemSetVerificationStatusResponse) {
        this.sandboxItemSetVerificationStatusResponse = sandboxItemSetVerificationStatusResponse;
        return this;
    }
    public Long statusCode;
    public SandboxItemSetVerificationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}