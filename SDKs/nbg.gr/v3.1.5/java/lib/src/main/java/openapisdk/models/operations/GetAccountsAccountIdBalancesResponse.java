package openapisdk.models.operations;



public class GetAccountsAccountIdBalancesResponse {
    public String contentType;
    public GetAccountsAccountIdBalancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdBalancesResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadBalance1 obReadBalance1;
    public GetAccountsAccountIdBalancesResponse withObReadBalance1(openapisdk.models.shared.ObReadBalance1 obReadBalance1) {
        this.obReadBalance1 = obReadBalance1;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdBalancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}