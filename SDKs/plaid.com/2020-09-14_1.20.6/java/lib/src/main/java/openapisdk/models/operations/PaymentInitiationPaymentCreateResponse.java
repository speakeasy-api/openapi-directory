package openapisdk.models.operations;



public class PaymentInitiationPaymentCreateResponse {
    public String contentType;
    public PaymentInitiationPaymentCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> paymentInitiationPaymentCreateResponse;
    public PaymentInitiationPaymentCreateResponse withPaymentInitiationPaymentCreateResponse(java.util.Map<String, Object> paymentInitiationPaymentCreateResponse) {
        this.paymentInitiationPaymentCreateResponse = paymentInitiationPaymentCreateResponse;
        return this;
    }
    public Long statusCode;
    public PaymentInitiationPaymentCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}