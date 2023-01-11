package openapisdk.models.operations;



public class PostLikesTracksTrackIdResponse {
    public String contentType;
    public PostLikesTracksTrackIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostLikesTracksTrackIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostLikesTracksTrackIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequests tooManyRequests;
    public PostLikesTracksTrackIdResponse withTooManyRequests(openapisdk.models.shared.TooManyRequests tooManyRequests) {
        this.tooManyRequests = tooManyRequests;
        return this;
    }
}