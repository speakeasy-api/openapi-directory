package openapisdk.models.operations;



public class PaymentInitiationPaymentGetResponse {
    public String contentType;
    public PaymentInitiationPaymentGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> paymentInitiationPaymentGetResponse;
    public PaymentInitiationPaymentGetResponse withPaymentInitiationPaymentGetResponse(java.util.Map<String, Object> paymentInitiationPaymentGetResponse) {
        this.paymentInitiationPaymentGetResponse = paymentInitiationPaymentGetResponse;
        return this;
    }
    public Long statusCode;
    public PaymentInitiationPaymentGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}