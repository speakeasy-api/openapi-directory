package openapisdk.models.operations;



public class YoutubeYoutubeV3UpdateCommentThreadsResponse {
    public openapisdk.models.shared.CommentThread commentThread;
    public YoutubeYoutubeV3UpdateCommentThreadsResponse withCommentThread(openapisdk.models.shared.CommentThread commentThread) {
        this.commentThread = commentThread;
        return this;
    }
    public String contentType;
    public YoutubeYoutubeV3UpdateCommentThreadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeYoutubeV3UpdateCommentThreadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}