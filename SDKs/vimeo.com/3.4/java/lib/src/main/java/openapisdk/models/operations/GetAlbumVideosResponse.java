package openapisdk.models.operations;



public class GetAlbumVideosResponse {
    public String contentType;
    public GetAlbumVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAlbumVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAlbumVideosResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetAlbumVideosResponse withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}