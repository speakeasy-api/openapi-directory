package openapisdk.models.operations;



public class SandboxItemResetLoginResponse {
    public String contentType;
    public SandboxItemResetLoginResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> sandboxItemResetLoginResponse;
    public SandboxItemResetLoginResponse withSandboxItemResetLoginResponse(java.util.Map<String, Object> sandboxItemResetLoginResponse) {
        this.sandboxItemResetLoginResponse = sandboxItemResetLoginResponse;
        return this;
    }
    public Long statusCode;
    public SandboxItemResetLoginResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}