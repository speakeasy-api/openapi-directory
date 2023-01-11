package openapisdk.models.operations;



public class GetAccountsAccountIdStandingOrdersResponse {
    public String contentType;
    public GetAccountsAccountIdStandingOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdStandingOrdersResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadStandingOrder6 obReadStandingOrder6;
    public GetAccountsAccountIdStandingOrdersResponse withObReadStandingOrder6(openapisdk.models.shared.ObReadStandingOrder6 obReadStandingOrder6) {
        this.obReadStandingOrder6 = obReadStandingOrder6;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdStandingOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}