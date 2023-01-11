package openapisdk.models.operations;



public class BankTransferCreateResponse {
    public java.util.Map<String, Object> bankTransferCreateResponse;
    public BankTransferCreateResponse withBankTransferCreateResponse(java.util.Map<String, Object> bankTransferCreateResponse) {
        this.bankTransferCreateResponse = bankTransferCreateResponse;
        return this;
    }
    public String contentType;
    public BankTransferCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public BankTransferCreateResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BankTransferCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}