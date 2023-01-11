package openapisdk.models.operations;



public class YoutubeCommentsListResponse {
    public openapisdk.models.shared.CommentListResponse commentListResponse;
    public YoutubeCommentsListResponse withCommentListResponse(openapisdk.models.shared.CommentListResponse commentListResponse) {
        this.commentListResponse = commentListResponse;
        return this;
    }
    public String contentType;
    public YoutubeCommentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeCommentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}