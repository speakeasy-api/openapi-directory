package openapisdk.models.operations;



public class GetAllBankAccountsResponse {
    public openapisdk.models.shared.BankAccountPaginatedResult bankAccountPaginatedResult;
    public GetAllBankAccountsResponse withBankAccountPaginatedResult(openapisdk.models.shared.BankAccountPaginatedResult bankAccountPaginatedResult) {
        this.bankAccountPaginatedResult = bankAccountPaginatedResult;
        return this;
    }
    public String contentType;
    public GetAllBankAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllBankAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}