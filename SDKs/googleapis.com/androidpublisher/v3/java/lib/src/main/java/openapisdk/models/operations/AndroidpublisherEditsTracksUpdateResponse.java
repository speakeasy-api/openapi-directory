package openapisdk.models.operations;



public class AndroidpublisherEditsTracksUpdateResponse {
    public String contentType;
    public AndroidpublisherEditsTracksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsTracksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Track track;
    public AndroidpublisherEditsTracksUpdateResponse withTrack(openapisdk.models.shared.Track track) {
        this.track = track;
        return this;
    }
}