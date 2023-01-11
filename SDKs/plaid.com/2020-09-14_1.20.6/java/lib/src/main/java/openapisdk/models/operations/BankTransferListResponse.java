package openapisdk.models.operations;



public class BankTransferListResponse {
    public java.util.Map<String, Object> bankTransferListResponse;
    public BankTransferListResponse withBankTransferListResponse(java.util.Map<String, Object> bankTransferListResponse) {
        this.bankTransferListResponse = bankTransferListResponse;
        return this;
    }
    public String contentType;
    public BankTransferListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public BankTransferListResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BankTransferListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}