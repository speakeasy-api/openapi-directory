package openapisdk.models.operations;



public class GetAlbumsResponse {
    public String contentType;
    public GetAlbumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAlbumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Album[] albums;
    public GetAlbumsResponse withAlbums(openapisdk.models.shared.Album[] albums) {
        this.albums = albums;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAlbumsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}