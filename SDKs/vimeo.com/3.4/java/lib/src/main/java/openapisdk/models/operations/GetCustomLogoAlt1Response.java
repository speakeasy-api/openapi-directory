package openapisdk.models.operations;



public class GetCustomLogoAlt1Response {
    public String contentType;
    public GetCustomLogoAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCustomLogoAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCustomLogoAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public GetCustomLogoAlt1Response withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}