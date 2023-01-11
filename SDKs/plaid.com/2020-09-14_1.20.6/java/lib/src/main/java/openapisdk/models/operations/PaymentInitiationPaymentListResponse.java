package openapisdk.models.operations;



public class PaymentInitiationPaymentListResponse {
    public String contentType;
    public PaymentInitiationPaymentListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> paymentInitiationPaymentListResponse;
    public PaymentInitiationPaymentListResponse withPaymentInitiationPaymentListResponse(java.util.Map<String, Object> paymentInitiationPaymentListResponse) {
        this.paymentInitiationPaymentListResponse = paymentInitiationPaymentListResponse;
        return this;
    }
    public Long statusCode;
    public PaymentInitiationPaymentListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}