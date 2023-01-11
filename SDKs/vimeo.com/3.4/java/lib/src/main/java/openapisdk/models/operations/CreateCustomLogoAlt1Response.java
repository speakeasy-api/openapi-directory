package openapisdk.models.operations;



public class CreateCustomLogoAlt1Response {
    public String contentType;
    public CreateCustomLogoAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCustomLogoAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CreateCustomLogoAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public CreateCustomLogoAlt1Response withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}