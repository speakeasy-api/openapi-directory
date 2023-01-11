package openapisdk.models.operations;



public class BankTransferGetResponse {
    public java.util.Map<String, Object> bankTransferGetResponse;
    public BankTransferGetResponse withBankTransferGetResponse(java.util.Map<String, Object> bankTransferGetResponse) {
        this.bankTransferGetResponse = bankTransferGetResponse;
        return this;
    }
    public String contentType;
    public BankTransferGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public BankTransferGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BankTransferGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}