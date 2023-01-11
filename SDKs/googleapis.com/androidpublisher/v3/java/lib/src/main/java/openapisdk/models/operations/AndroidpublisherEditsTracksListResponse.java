package openapisdk.models.operations;



public class AndroidpublisherEditsTracksListResponse {
    public String contentType;
    public AndroidpublisherEditsTracksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsTracksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TracksListResponse tracksListResponse;
    public AndroidpublisherEditsTracksListResponse withTracksListResponse(openapisdk.models.shared.TracksListResponse tracksListResponse) {
        this.tracksListResponse = tracksListResponse;
        return this;
    }
}