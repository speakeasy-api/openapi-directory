package openapisdk.models.operations;



public class PostRepostsTracksTrackIdResponse {
    public String contentType;
    public PostRepostsTracksTrackIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostRepostsTracksTrackIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostRepostsTracksTrackIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}