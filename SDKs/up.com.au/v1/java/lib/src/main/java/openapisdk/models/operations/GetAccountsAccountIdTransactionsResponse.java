package openapisdk.models.operations;



public class GetAccountsAccountIdTransactionsResponse {
    public String contentType;
    public GetAccountsAccountIdTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTransactionsResponse listTransactionsResponse;
    public GetAccountsAccountIdTransactionsResponse withListTransactionsResponse(openapisdk.models.shared.ListTransactionsResponse listTransactionsResponse) {
        this.listTransactionsResponse = listTransactionsResponse;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}