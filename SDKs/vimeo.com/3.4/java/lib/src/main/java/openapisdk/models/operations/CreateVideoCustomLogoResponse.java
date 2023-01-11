package openapisdk.models.operations;



public class CreateVideoCustomLogoResponse {
    public String contentType;
    public CreateVideoCustomLogoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVideoCustomLogoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CreateVideoCustomLogoResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public CreateVideoCustomLogoResponse withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}