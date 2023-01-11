package openapisdk.models.operations;



public class GetAccountsAccountIdStatementsStatementIdTransactionsResponse {
    public String contentType;
    public GetAccountsAccountIdStatementsStatementIdTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdStatementsStatementIdTransactionsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadTransaction6 obReadTransaction6;
    public GetAccountsAccountIdStatementsStatementIdTransactionsResponse withObReadTransaction6(openapisdk.models.shared.ObReadTransaction6 obReadTransaction6) {
        this.obReadTransaction6 = obReadTransaction6;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdStatementsStatementIdTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}