package openapisdk.models.operations;



public class BankTransferBalanceGetResponse {
    public java.util.Map<String, Object> bankTransferBalanceGetResponse;
    public BankTransferBalanceGetResponse withBankTransferBalanceGetResponse(java.util.Map<String, Object> bankTransferBalanceGetResponse) {
        this.bankTransferBalanceGetResponse = bankTransferBalanceGetResponse;
        return this;
    }
    public String contentType;
    public BankTransferBalanceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public BankTransferBalanceGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BankTransferBalanceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}