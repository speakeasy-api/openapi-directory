package openapisdk.models.operations;



public class GetPayoutSummaryV3Response {
    public String contentType;
    public GetPayoutSummaryV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayoutSummaryResponseV3 payoutSummaryResponseV3;
    public GetPayoutSummaryV3Response withPayoutSummaryResponseV3(openapisdk.models.shared.PayoutSummaryResponseV3 payoutSummaryResponseV3) {
        this.payoutSummaryResponseV3 = payoutSummaryResponseV3;
        return this;
    }
    public Long statusCode;
    public GetPayoutSummaryV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse401;
    public GetPayoutSummaryV3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetPayoutSummaryV3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetPayoutSummaryV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}