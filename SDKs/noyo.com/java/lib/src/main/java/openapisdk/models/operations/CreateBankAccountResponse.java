package openapisdk.models.operations;



public class CreateBankAccountResponse {
    public openapisdk.models.shared.BankAccountResult bankAccountResult;
    public CreateBankAccountResponse withBankAccountResult(openapisdk.models.shared.BankAccountResult bankAccountResult) {
        this.bankAccountResult = bankAccountResult;
        return this;
    }
    public String contentType;
    public CreateBankAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBankAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}