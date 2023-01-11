package openapisdk.models.operations;



public class YoutubeCommentThreadsInsertResponse {
    public openapisdk.models.shared.CommentThread commentThread;
    public YoutubeCommentThreadsInsertResponse withCommentThread(openapisdk.models.shared.CommentThread commentThread) {
        this.commentThread = commentThread;
        return this;
    }
    public String contentType;
    public YoutubeCommentThreadsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeCommentThreadsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}