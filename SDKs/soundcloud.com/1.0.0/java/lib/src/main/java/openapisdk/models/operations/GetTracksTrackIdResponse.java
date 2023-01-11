package openapisdk.models.operations;



public class GetTracksTrackIdResponse {
    public String contentType;
    public GetTracksTrackIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTracksTrackIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTracksTrackIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Track track;
    public GetTracksTrackIdResponse withTrack(openapisdk.models.shared.Track track) {
        this.track = track;
        return this;
    }
}