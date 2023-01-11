package openapisdk.models.operations;



public class GetAccountsResponse {
    public String contentType;
    public GetAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadAccount5 obReadAccount5;
    public GetAccountsResponse withObReadAccount5(openapisdk.models.shared.ObReadAccount5 obReadAccount5) {
        this.obReadAccount5 = obReadAccount5;
        return this;
    }
    public Long statusCode;
    public GetAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}