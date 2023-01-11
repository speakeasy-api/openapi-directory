package openapisdk.models.operations;



public class GetAlbumsAlt1Response {
    public String contentType;
    public GetAlbumsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAlbumsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Album[] albums;
    public GetAlbumsAlt1Response withAlbums(openapisdk.models.shared.Album[] albums) {
        this.albums = albums;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAlbumsAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}