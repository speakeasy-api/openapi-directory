package openapisdk.models.operations;



public class PaymentInitiationRecipientCreateResponse {
    public String contentType;
    public PaymentInitiationRecipientCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> paymentInitiationRecipientCreateResponse;
    public PaymentInitiationRecipientCreateResponse withPaymentInitiationRecipientCreateResponse(java.util.Map<String, Object> paymentInitiationRecipientCreateResponse) {
        this.paymentInitiationRecipientCreateResponse = paymentInitiationRecipientCreateResponse;
        return this;
    }
    public Long statusCode;
    public PaymentInitiationRecipientCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}