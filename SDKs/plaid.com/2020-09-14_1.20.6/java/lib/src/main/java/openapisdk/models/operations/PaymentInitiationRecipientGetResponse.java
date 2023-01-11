package openapisdk.models.operations;



public class PaymentInitiationRecipientGetResponse {
    public String contentType;
    public PaymentInitiationRecipientGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> paymentInitiationRecipientGetResponse;
    public PaymentInitiationRecipientGetResponse withPaymentInitiationRecipientGetResponse(java.util.Map<String, Object> paymentInitiationRecipientGetResponse) {
        this.paymentInitiationRecipientGetResponse = paymentInitiationRecipientGetResponse;
        return this;
    }
    public Long statusCode;
    public PaymentInitiationRecipientGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}