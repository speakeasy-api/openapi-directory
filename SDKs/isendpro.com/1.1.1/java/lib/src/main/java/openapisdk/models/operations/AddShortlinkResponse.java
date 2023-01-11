package openapisdk.models.operations;



public class AddShortlinkResponse {
    public String contentType;
    public AddShortlinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public AddShortlinkResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public openapisdk.models.shared.ShortlinkResponse shortlinkResponse;
    public AddShortlinkResponse withShortlinkResponse(openapisdk.models.shared.ShortlinkResponse shortlinkResponse) {
        this.shortlinkResponse = shortlinkResponse;
        return this;
    }
    public Long statusCode;
    public AddShortlinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}