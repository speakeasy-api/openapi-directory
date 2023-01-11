package openapisdk.models.operations;



public class PostLikesPlaylistsPlaylistIdResponse {
    public String contentType;
    public PostLikesPlaylistsPlaylistIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostLikesPlaylistsPlaylistIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostLikesPlaylistsPlaylistIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequests tooManyRequests;
    public PostLikesPlaylistsPlaylistIdResponse withTooManyRequests(openapisdk.models.shared.TooManyRequests tooManyRequests) {
        this.tooManyRequests = tooManyRequests;
        return this;
    }
}