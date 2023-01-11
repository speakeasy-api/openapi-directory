package openapisdk.models.operations;



public class GetMeTracksTrackIdResponse {
    public String contentType;
    public GetMeTracksTrackIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeTracksTrackIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Track track;
    public GetMeTracksTrackIdResponse withTrack(openapisdk.models.shared.Track track) {
        this.track = track;
        return this;
    }
}