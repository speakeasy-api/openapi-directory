package openapisdk.models.operations;



public class SandboxItemFireWebhookResponse {
    public String contentType;
    public SandboxItemFireWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SandboxItemFireWebhookResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> sandboxItemFireWebhookResponse;
    public SandboxItemFireWebhookResponse withSandboxItemFireWebhookResponse(java.util.Map<String, Object> sandboxItemFireWebhookResponse) {
        this.sandboxItemFireWebhookResponse = sandboxItemFireWebhookResponse;
        return this;
    }
    public Long statusCode;
    public SandboxItemFireWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}