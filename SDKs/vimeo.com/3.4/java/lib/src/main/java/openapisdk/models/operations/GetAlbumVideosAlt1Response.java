package openapisdk.models.operations;



public class GetAlbumVideosAlt1Response {
    public String contentType;
    public GetAlbumVideosAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAlbumVideosAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAlbumVideosAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetAlbumVideosAlt1Response withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}