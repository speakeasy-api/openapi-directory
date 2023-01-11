package openapisdk.models.operations;



public class AndroidpublisherEditsTracksGetResponse {
    public String contentType;
    public AndroidpublisherEditsTracksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsTracksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Track track;
    public AndroidpublisherEditsTracksGetResponse withTrack(openapisdk.models.shared.Track track) {
        this.track = track;
        return this;
    }
}