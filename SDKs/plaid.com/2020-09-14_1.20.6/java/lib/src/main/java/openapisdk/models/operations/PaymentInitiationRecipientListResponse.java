package openapisdk.models.operations;



public class PaymentInitiationRecipientListResponse {
    public String contentType;
    public PaymentInitiationRecipientListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> paymentInitiationRecipientListResponse;
    public PaymentInitiationRecipientListResponse withPaymentInitiationRecipientListResponse(java.util.Map<String, Object> paymentInitiationRecipientListResponse) {
        this.paymentInitiationRecipientListResponse = paymentInitiationRecipientListResponse;
        return this;
    }
    public Long statusCode;
    public PaymentInitiationRecipientListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}