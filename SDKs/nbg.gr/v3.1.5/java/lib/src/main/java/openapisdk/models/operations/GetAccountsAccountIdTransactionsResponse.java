package openapisdk.models.operations;



public class GetAccountsAccountIdTransactionsResponse {
    public String contentType;
    public GetAccountsAccountIdTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdTransactionsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadTransaction6 obReadTransaction6;
    public GetAccountsAccountIdTransactionsResponse withObReadTransaction6(openapisdk.models.shared.ObReadTransaction6 obReadTransaction6) {
        this.obReadTransaction6 = obReadTransaction6;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}