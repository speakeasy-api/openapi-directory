package openapisdk.models.operations;



public class SandboxBankTransferFireWebhookResponse {
    public String contentType;
    public SandboxBankTransferFireWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SandboxBankTransferFireWebhookResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SandboxBankTransferFireWebhookResponse sandboxBankTransferFireWebhookResponse;
    public SandboxBankTransferFireWebhookResponse withSandboxBankTransferFireWebhookResponse(openapisdk.models.shared.SandboxBankTransferFireWebhookResponse sandboxBankTransferFireWebhookResponse) {
        this.sandboxBankTransferFireWebhookResponse = sandboxBankTransferFireWebhookResponse;
        return this;
    }
    public Long statusCode;
    public SandboxBankTransferFireWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}