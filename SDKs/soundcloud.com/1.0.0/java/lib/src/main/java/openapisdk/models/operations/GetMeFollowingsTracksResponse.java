package openapisdk.models.operations;



public class GetMeFollowingsTracksResponse {
    public String contentType;
    public GetMeFollowingsTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeFollowingsTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetMeFollowingsTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Track[] tracksList;
    public GetMeFollowingsTracksResponse withTracksList(openapisdk.models.shared.Track[] tracksList) {
        this.tracksList = tracksList;
        return this;
    }
}