package openapisdk.models.operations;



public class SubaccountAddResponse {
    public String contentType;
    public SubaccountAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public SubaccountAddResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public Long statusCode;
    public SubaccountAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubaccountAddResponse subaccountAddResponse;
    public SubaccountAddResponse withSubaccountAddResponse(openapisdk.models.shared.SubaccountAddResponse subaccountAddResponse) {
        this.subaccountAddResponse = subaccountAddResponse;
        return this;
    }
}