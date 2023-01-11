package openapisdk.models.operations;



public class WithdrawPaymentResponse {
    public String contentType;
    public WithdrawPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WithdrawPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public WithdrawPaymentResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public WithdrawPaymentResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public WithdrawPaymentResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public WithdrawPaymentResponse withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}