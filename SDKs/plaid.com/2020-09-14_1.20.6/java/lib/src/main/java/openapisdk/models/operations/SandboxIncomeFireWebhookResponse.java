package openapisdk.models.operations;



public class SandboxIncomeFireWebhookResponse {
    public String contentType;
    public SandboxIncomeFireWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SandboxIncomeFireWebhookResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SandboxIncomeFireWebhookResponse sandboxIncomeFireWebhookResponse;
    public SandboxIncomeFireWebhookResponse withSandboxIncomeFireWebhookResponse(openapisdk.models.shared.SandboxIncomeFireWebhookResponse sandboxIncomeFireWebhookResponse) {
        this.sandboxIncomeFireWebhookResponse = sandboxIncomeFireWebhookResponse;
        return this;
    }
    public Long statusCode;
    public SandboxIncomeFireWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}