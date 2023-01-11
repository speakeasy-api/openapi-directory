package openapisdk.models.operations;



public class GetVideosWithTagResponse {
    public String contentType;
    public GetVideosWithTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideosWithTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVideosWithTagResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetVideosWithTagResponse withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}