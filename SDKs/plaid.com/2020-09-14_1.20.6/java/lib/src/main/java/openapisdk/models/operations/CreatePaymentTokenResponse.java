package openapisdk.models.operations;



public class CreatePaymentTokenResponse {
    public String contentType;
    public CreatePaymentTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> paymentInitiationPaymentTokenCreateResponse;
    public CreatePaymentTokenResponse withPaymentInitiationPaymentTokenCreateResponse(java.util.Map<String, Object> paymentInitiationPaymentTokenCreateResponse) {
        this.paymentInitiationPaymentTokenCreateResponse = paymentInitiationPaymentTokenCreateResponse;
        return this;
    }
    public Long statusCode;
    public CreatePaymentTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}