package openapisdk.models.operations;



public class BankTransferMigrateAccountResponse {
    public java.util.Map<String, Object> bankTransferMigrateAccountResponse;
    public BankTransferMigrateAccountResponse withBankTransferMigrateAccountResponse(java.util.Map<String, Object> bankTransferMigrateAccountResponse) {
        this.bankTransferMigrateAccountResponse = bankTransferMigrateAccountResponse;
        return this;
    }
    public String contentType;
    public BankTransferMigrateAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public BankTransferMigrateAccountResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BankTransferMigrateAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}