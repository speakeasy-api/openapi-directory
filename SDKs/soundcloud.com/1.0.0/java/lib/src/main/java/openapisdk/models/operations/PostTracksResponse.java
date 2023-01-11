package openapisdk.models.operations;



public class PostTracksResponse {
    public String contentType;
    public PostTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Track track;
    public PostTracksResponse withTrack(openapisdk.models.shared.Track track) {
        this.track = track;
        return this;
    }
}