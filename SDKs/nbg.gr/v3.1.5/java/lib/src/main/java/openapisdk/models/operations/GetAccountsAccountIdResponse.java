package openapisdk.models.operations;



public class GetAccountsAccountIdResponse {
    public String contentType;
    public GetAccountsAccountIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadAccount5 obReadAccount5;
    public GetAccountsAccountIdResponse withObReadAccount5(openapisdk.models.shared.ObReadAccount5 obReadAccount5) {
        this.obReadAccount5 = obReadAccount5;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}