package openapisdk.models.operations;



public class GetAccountsAccountIdStatementsStatementIdResponse {
    public String contentType;
    public GetAccountsAccountIdStatementsStatementIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdStatementsStatementIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadStatement2 obReadStatement2;
    public GetAccountsAccountIdStatementsStatementIdResponse withObReadStatement2(openapisdk.models.shared.ObReadStatement2 obReadStatement2) {
        this.obReadStatement2 = obReadStatement2;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdStatementsStatementIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}