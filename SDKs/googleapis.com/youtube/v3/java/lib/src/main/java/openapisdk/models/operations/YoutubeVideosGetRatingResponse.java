package openapisdk.models.operations;



public class YoutubeVideosGetRatingResponse {
    public String contentType;
    public YoutubeVideosGetRatingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeVideosGetRatingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoGetRatingResponse videoGetRatingResponse;
    public YoutubeVideosGetRatingResponse withVideoGetRatingResponse(openapisdk.models.shared.VideoGetRatingResponse videoGetRatingResponse) {
        this.videoGetRatingResponse = videoGetRatingResponse;
        return this;
    }
}