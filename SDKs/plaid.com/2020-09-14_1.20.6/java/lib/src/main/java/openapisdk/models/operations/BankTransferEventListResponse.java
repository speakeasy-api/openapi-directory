package openapisdk.models.operations;



public class BankTransferEventListResponse {
    public java.util.Map<String, Object> bankTransferEventListResponse;
    public BankTransferEventListResponse withBankTransferEventListResponse(java.util.Map<String, Object> bankTransferEventListResponse) {
        this.bankTransferEventListResponse = bankTransferEventListResponse;
        return this;
    }
    public String contentType;
    public BankTransferEventListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public BankTransferEventListResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BankTransferEventListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}