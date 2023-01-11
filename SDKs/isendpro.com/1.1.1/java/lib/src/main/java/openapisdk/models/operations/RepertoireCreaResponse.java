package openapisdk.models.operations;



public class RepertoireCreaResponse {
    public String contentType;
    public RepertoireCreaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public RepertoireCreaResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public openapisdk.models.shared.RepertoirEcreatereponse repertoirEcreatereponse;
    public RepertoireCreaResponse withRepertoirEcreatereponse(openapisdk.models.shared.RepertoirEcreatereponse repertoirEcreatereponse) {
        this.repertoirEcreatereponse = repertoirEcreatereponse;
        return this;
    }
    public Long statusCode;
    public RepertoireCreaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}