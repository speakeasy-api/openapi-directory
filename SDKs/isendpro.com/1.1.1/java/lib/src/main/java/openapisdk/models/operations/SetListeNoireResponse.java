package openapisdk.models.operations;



public class SetListeNoireResponse {
    public String contentType;
    public SetListeNoireResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public SetListeNoireResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public openapisdk.models.shared.ListenoireReponse listenoireReponse;
    public SetListeNoireResponse withListenoireReponse(openapisdk.models.shared.ListenoireReponse listenoireReponse) {
        this.listenoireReponse = listenoireReponse;
        return this;
    }
    public Long statusCode;
    public SetListeNoireResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}