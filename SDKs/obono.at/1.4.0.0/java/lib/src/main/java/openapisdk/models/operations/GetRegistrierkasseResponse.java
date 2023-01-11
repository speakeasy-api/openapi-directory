package openapisdk.models.operations;



public class GetRegistrierkasseResponse {
    public String contentType;
    public GetRegistrierkasseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Registrierkasse registrierkasse;
    public GetRegistrierkasseResponse withRegistrierkasse(openapisdk.models.shared.Registrierkasse registrierkasse) {
        this.registrierkasse = registrierkasse;
        return this;
    }
    public Long statusCode;
    public GetRegistrierkasseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}