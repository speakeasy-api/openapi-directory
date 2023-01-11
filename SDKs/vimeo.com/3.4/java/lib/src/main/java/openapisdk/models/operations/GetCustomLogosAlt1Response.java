package openapisdk.models.operations;



public class GetCustomLogosAlt1Response {
    public String contentType;
    public GetCustomLogosAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCustomLogosAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetCustomLogosAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture[] pictures;
    public GetCustomLogosAlt1Response withPictures(openapisdk.models.shared.Picture[] pictures) {
        this.pictures = pictures;
        return this;
    }
}