package openapisdk.models.operations;



public class GetAlbumAlt1Response {
    public String contentType;
    public GetAlbumAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAlbumAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Album album;
    public GetAlbumAlt1Response withAlbum(openapisdk.models.shared.Album album) {
        this.album = album;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAlbumAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}