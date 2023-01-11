package openapisdk.models.operations;



public class AddVideoToAlbumAlt1Response {
    public String contentType;
    public AddVideoToAlbumAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoToAlbumAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public AddVideoToAlbumAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}