package openapisdk.models.operations;



public class DeleteRepostsTracksTrackIdResponse {
    public String contentType;
    public DeleteRepostsTracksTrackIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteRepostsTracksTrackIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteRepostsTracksTrackIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}