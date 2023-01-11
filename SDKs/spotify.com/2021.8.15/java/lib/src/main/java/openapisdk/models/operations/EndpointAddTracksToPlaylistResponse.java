package openapisdk.models.operations;



public class EndpointAddTracksToPlaylistResponse {
    public String contentType;
    public EndpointAddTracksToPlaylistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointAddTracksToPlaylistResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.SnapshotIdObject snapshotIdObject;
    public EndpointAddTracksToPlaylistResponse withSnapshotIdObject(openapisdk.models.shared.SnapshotIdObject snapshotIdObject) {
        this.snapshotIdObject = snapshotIdObject;
        return this;
    }
    public Long statusCode;
    public EndpointAddTracksToPlaylistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}