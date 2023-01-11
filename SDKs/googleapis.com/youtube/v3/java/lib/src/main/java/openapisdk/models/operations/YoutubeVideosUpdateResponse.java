package openapisdk.models.operations;



public class YoutubeVideosUpdateResponse {
    public String contentType;
    public YoutubeVideosUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeVideosUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public YoutubeVideosUpdateResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}