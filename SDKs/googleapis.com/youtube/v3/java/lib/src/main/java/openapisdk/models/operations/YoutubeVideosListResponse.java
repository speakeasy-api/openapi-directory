package openapisdk.models.operations;



public class YoutubeVideosListResponse {
    public String contentType;
    public YoutubeVideosListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeVideosListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoListResponse videoListResponse;
    public YoutubeVideosListResponse withVideoListResponse(openapisdk.models.shared.VideoListResponse videoListResponse) {
        this.videoListResponse = videoListResponse;
        return this;
    }
}