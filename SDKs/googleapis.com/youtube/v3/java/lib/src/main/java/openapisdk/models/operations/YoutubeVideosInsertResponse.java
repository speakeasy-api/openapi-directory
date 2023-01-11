package openapisdk.models.operations;



public class YoutubeVideosInsertResponse {
    public String contentType;
    public YoutubeVideosInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeVideosInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public YoutubeVideosInsertResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}