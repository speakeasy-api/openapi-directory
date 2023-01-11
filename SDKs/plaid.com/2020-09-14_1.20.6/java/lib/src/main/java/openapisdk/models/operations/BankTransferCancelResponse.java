package openapisdk.models.operations;



public class BankTransferCancelResponse {
    public java.util.Map<String, Object> bankTransferCancelResponse;
    public BankTransferCancelResponse withBankTransferCancelResponse(java.util.Map<String, Object> bankTransferCancelResponse) {
        this.bankTransferCancelResponse = bankTransferCancelResponse;
        return this;
    }
    public String contentType;
    public BankTransferCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public BankTransferCancelResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BankTransferCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}