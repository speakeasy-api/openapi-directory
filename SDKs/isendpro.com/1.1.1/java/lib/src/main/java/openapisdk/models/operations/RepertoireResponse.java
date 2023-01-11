package openapisdk.models.operations;



public class RepertoireResponse {
    public String contentType;
    public RepertoireResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public RepertoireResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public openapisdk.models.shared.RepertoirEmodifreponse repertoirEmodifreponse;
    public RepertoireResponse withRepertoirEmodifreponse(openapisdk.models.shared.RepertoirEmodifreponse repertoirEmodifreponse) {
        this.repertoirEmodifreponse = repertoirEmodifreponse;
        return this;
    }
    public Long statusCode;
    public RepertoireResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}