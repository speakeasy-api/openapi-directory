package openapisdk.models.operations;



public class GetPaymentsForPayoutV4Response {
    public String contentType;
    public GetPaymentsForPayoutV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentsForPayoutResponseV4 getPaymentsForPayoutResponseV4;
    public GetPaymentsForPayoutV4Response withGetPaymentsForPayoutResponseV4(openapisdk.models.shared.GetPaymentsForPayoutResponseV4 getPaymentsForPayoutResponseV4) {
        this.getPaymentsForPayoutResponseV4 = getPaymentsForPayoutResponseV4;
        return this;
    }
    public Long statusCode;
    public GetPaymentsForPayoutV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetPaymentsForPayoutV4Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetPaymentsForPayoutV4Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetPaymentsForPayoutV4Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetPaymentsForPayoutV4Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}