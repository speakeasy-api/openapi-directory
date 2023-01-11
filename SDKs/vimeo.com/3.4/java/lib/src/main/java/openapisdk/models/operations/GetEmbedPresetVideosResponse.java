package openapisdk.models.operations;



public class GetEmbedPresetVideosResponse {
    public String contentType;
    public GetEmbedPresetVideosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEmbedPresetVideosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video[] videos;
    public GetEmbedPresetVideosResponse withVideos(openapisdk.models.shared.Video[] videos) {
        this.videos = videos;
        return this;
    }
}