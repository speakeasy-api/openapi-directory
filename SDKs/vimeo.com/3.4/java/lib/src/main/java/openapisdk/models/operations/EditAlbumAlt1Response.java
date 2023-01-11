package openapisdk.models.operations;



public class EditAlbumAlt1Response {
    public String contentType;
    public EditAlbumAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditAlbumAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Album album;
    public EditAlbumAlt1Response withAlbum(openapisdk.models.shared.Album album) {
        this.album = album;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public EditAlbumAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}