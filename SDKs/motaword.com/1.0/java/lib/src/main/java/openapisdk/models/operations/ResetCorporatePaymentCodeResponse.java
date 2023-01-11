package openapisdk.models.operations;



public class ResetCorporatePaymentCodeResponse {
    public String contentType;
    public ResetCorporatePaymentCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreditCard creditCard;
    public ResetCorporatePaymentCodeResponse withCreditCard(openapisdk.models.shared.CreditCard creditCard) {
        this.creditCard = creditCard;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ResetCorporatePaymentCodeResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public ResetCorporatePaymentCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}