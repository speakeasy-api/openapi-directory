package openapisdk.models.operations;



public class GetBankAccountResponse {
    public openapisdk.models.shared.BankAccountResult bankAccountResult;
    public GetBankAccountResponse withBankAccountResult(openapisdk.models.shared.BankAccountResult bankAccountResult) {
        this.bankAccountResult = bankAccountResult;
        return this;
    }
    public String contentType;
    public GetBankAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBankAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}