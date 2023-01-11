package openapisdk.models.operations;



public class SubaccountEditResponse {
    public String contentType;
    public SubaccountEditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public SubaccountEditResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public Long statusCode;
    public SubaccountEditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubaccountResponse subaccountResponse;
    public SubaccountEditResponse withSubaccountResponse(openapisdk.models.shared.SubaccountResponse subaccountResponse) {
        this.subaccountResponse = subaccountResponse;
        return this;
    }
}