package openapisdk.models.operations;



public class GetAccountsAccountIdStatementsResponse {
    public String contentType;
    public GetAccountsAccountIdStatementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdStatementsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadStatement2 obReadStatement2;
    public GetAccountsAccountIdStatementsResponse withObReadStatement2(openapisdk.models.shared.ObReadStatement2 obReadStatement2) {
        this.obReadStatement2 = obReadStatement2;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdStatementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}