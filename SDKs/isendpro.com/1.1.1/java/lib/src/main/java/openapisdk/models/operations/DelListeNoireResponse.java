package openapisdk.models.operations;



public class DelListeNoireResponse {
    public String contentType;
    public DelListeNoireResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public DelListeNoireResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public openapisdk.models.shared.ListenoireReponse listenoireReponse;
    public DelListeNoireResponse withListenoireReponse(openapisdk.models.shared.ListenoireReponse listenoireReponse) {
        this.listenoireReponse = listenoireReponse;
        return this;
    }
    public Long statusCode;
    public DelListeNoireResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}