package openapisdk.models.operations;



public class GetAccountsAccountIdScheduledPaymentsResponse {
    public String contentType;
    public GetAccountsAccountIdScheduledPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObErrorResponse1 obErrorResponse1;
    public GetAccountsAccountIdScheduledPaymentsResponse withObErrorResponse1(openapisdk.models.shared.ObErrorResponse1 obErrorResponse1) {
        this.obErrorResponse1 = obErrorResponse1;
        return this;
    }
    public openapisdk.models.shared.ObReadScheduledPayment3 obReadScheduledPayment3;
    public GetAccountsAccountIdScheduledPaymentsResponse withObReadScheduledPayment3(openapisdk.models.shared.ObReadScheduledPayment3 obReadScheduledPayment3) {
        this.obReadScheduledPayment3 = obReadScheduledPayment3;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdScheduledPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}