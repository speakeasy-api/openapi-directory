package openapisdk.models.operations;



public class AdsenseAccountsPaymentsListResponse {
    public String contentType;
    public AdsenseAccountsPaymentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPaymentsResponse listPaymentsResponse;
    public AdsenseAccountsPaymentsListResponse withListPaymentsResponse(openapisdk.models.shared.ListPaymentsResponse listPaymentsResponse) {
        this.listPaymentsResponse = listPaymentsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsPaymentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}