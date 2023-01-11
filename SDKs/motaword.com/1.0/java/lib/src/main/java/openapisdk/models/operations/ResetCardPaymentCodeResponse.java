package openapisdk.models.operations;



public class ResetCardPaymentCodeResponse {
    public String contentType;
    public ResetCardPaymentCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreditCard creditCard;
    public ResetCardPaymentCodeResponse withCreditCard(openapisdk.models.shared.CreditCard creditCard) {
        this.creditCard = creditCard;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ResetCardPaymentCodeResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public ResetCardPaymentCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}