package openapisdk.models.operations;



public class SandboxBankTransferSimulateResponse {
    public String contentType;
    public SandboxBankTransferSimulateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SandboxBankTransferSimulateResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> sandboxBankTransferSimulateResponse;
    public SandboxBankTransferSimulateResponse withSandboxBankTransferSimulateResponse(java.util.Map<String, Object> sandboxBankTransferSimulateResponse) {
        this.sandboxBankTransferSimulateResponse = sandboxBankTransferSimulateResponse;
        return this;
    }
    public Long statusCode;
    public SandboxBankTransferSimulateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}