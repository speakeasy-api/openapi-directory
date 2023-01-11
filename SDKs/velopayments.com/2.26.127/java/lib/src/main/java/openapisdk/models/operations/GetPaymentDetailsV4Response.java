package openapisdk.models.operations;



public class GetPaymentDetailsV4Response {
    public String contentType;
    public GetPaymentDetailsV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentResponseV4 paymentResponseV4;
    public GetPaymentDetailsV4Response withPaymentResponseV4(openapisdk.models.shared.PaymentResponseV4 paymentResponseV4) {
        this.paymentResponseV4 = paymentResponseV4;
        return this;
    }
    public Long statusCode;
    public GetPaymentDetailsV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetPaymentDetailsV4Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetPaymentDetailsV4Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetPaymentDetailsV4Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetPaymentDetailsV4Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}