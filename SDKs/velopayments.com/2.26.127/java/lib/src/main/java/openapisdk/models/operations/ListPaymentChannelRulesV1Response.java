package openapisdk.models.operations;



public class ListPaymentChannelRulesV1Response {
    public String contentType;
    public ListPaymentChannelRulesV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentChannelRulesResponse paymentChannelRulesResponse;
    public ListPaymentChannelRulesV1Response withPaymentChannelRulesResponse(openapisdk.models.shared.PaymentChannelRulesResponse paymentChannelRulesResponse) {
        this.paymentChannelRulesResponse = paymentChannelRulesResponse;
        return this;
    }
    public Long statusCode;
    public ListPaymentChannelRulesV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse401;
    public ListPaymentChannelRulesV1Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
}