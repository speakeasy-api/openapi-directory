package openapisdk.models.operations;



public class GetPaymentsForPayoutV3Response {
    public String contentType;
    public GetPaymentsForPayoutV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedPaymentsResponseV3 pagedPaymentsResponseV3;
    public GetPaymentsForPayoutV3Response withPagedPaymentsResponseV3(openapisdk.models.shared.PagedPaymentsResponseV3 pagedPaymentsResponseV3) {
        this.pagedPaymentsResponseV3 = pagedPaymentsResponseV3;
        return this;
    }
    public Long statusCode;
    public GetPaymentsForPayoutV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse404;
    public GetPaymentsForPayoutV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}