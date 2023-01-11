package openapisdk.models.operations;



public class PostTracksTrackIdCommentsResponse {
    public openapisdk.models.shared.Comment comment;
    public PostTracksTrackIdCommentsResponse withComment(openapisdk.models.shared.Comment comment) {
        this.comment = comment;
        return this;
    }
    public String contentType;
    public PostTracksTrackIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostTracksTrackIdCommentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostTracksTrackIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequests tooManyRequests;
    public PostTracksTrackIdCommentsResponse withTooManyRequests(openapisdk.models.shared.TooManyRequests tooManyRequests) {
        this.tooManyRequests = tooManyRequests;
        return this;
    }
}