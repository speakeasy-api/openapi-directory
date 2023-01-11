package openapisdk.models.operations;



public class GetCustomLogoResponse {
    public String contentType;
    public GetCustomLogoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCustomLogoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCustomLogoResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public GetCustomLogoResponse withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}