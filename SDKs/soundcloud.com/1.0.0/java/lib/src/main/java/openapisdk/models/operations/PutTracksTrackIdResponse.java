package openapisdk.models.operations;



public class PutTracksTrackIdResponse {
    public String contentType;
    public PutTracksTrackIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutTracksTrackIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PutTracksTrackIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Track track;
    public PutTracksTrackIdResponse withTrack(openapisdk.models.shared.Track track) {
        this.track = track;
        return this;
    }
}