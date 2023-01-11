package openapisdk.models.operations;



public class EditAlbumResponse {
    public String contentType;
    public EditAlbumResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditAlbumResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Album album;
    public EditAlbumResponse withAlbum(openapisdk.models.shared.Album album) {
        this.album = album;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public EditAlbumResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}