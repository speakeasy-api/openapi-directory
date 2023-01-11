package openapisdk.models.operations;



public class GetHlrResponse {
    public String contentType;
    public GetHlrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public GetHlrResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public openapisdk.models.shared.HlrReponse hlrReponse;
    public GetHlrResponse withHlrReponse(openapisdk.models.shared.HlrReponse hlrReponse) {
        this.hlrReponse = hlrReponse;
        return this;
    }
    public Long statusCode;
    public GetHlrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}