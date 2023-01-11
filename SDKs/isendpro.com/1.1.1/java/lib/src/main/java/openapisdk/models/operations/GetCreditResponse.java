package openapisdk.models.operations;



public class GetCreditResponse {
    public String contentType;
    public GetCreditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreditResponse creditResponse;
    public GetCreditResponse withCreditResponse(openapisdk.models.shared.CreditResponse creditResponse) {
        this.creditResponse = creditResponse;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public GetCreditResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public Long statusCode;
    public GetCreditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}