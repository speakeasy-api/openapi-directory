package openapisdk.models.operations;



public class GetCreditCardResponse {
    public String contentType;
    public GetCreditCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreditCard creditCard;
    public GetCreditCardResponse withCreditCard(openapisdk.models.shared.CreditCard creditCard) {
        this.creditCard = creditCard;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCreditCardResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCreditCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}