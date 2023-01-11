package openapisdk.models.operations;



public class GetCustomLogosResponse {
    public String contentType;
    public GetCustomLogosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCustomLogosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCustomLogosResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture[] pictures;
    public GetCustomLogosResponse withPictures(openapisdk.models.shared.Picture[] pictures) {
        this.pictures = pictures;
        return this;
    }
}