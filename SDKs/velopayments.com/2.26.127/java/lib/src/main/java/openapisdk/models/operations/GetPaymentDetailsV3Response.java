package openapisdk.models.operations;



public class GetPaymentDetailsV3Response {
    public String contentType;
    public GetPaymentDetailsV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentResponseV3 paymentResponseV3;
    public GetPaymentDetailsV3Response withPaymentResponseV3(openapisdk.models.shared.PaymentResponseV3 paymentResponseV3) {
        this.paymentResponseV3 = paymentResponseV3;
        return this;
    }
    public Long statusCode;
    public GetPaymentDetailsV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetPaymentDetailsV3Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetPaymentDetailsV3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetPaymentDetailsV3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetPaymentDetailsV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}