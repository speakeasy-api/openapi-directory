package openapisdk.models.operations;



public class ComptageResponse {
    public openapisdk.models.shared.ComptageReponse comptageReponse;
    public ComptageResponse withComptageReponse(openapisdk.models.shared.ComptageReponse comptageReponse) {
        this.comptageReponse = comptageReponse;
        return this;
    }
    public String contentType;
    public ComptageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public ComptageResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public Long statusCode;
    public ComptageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}