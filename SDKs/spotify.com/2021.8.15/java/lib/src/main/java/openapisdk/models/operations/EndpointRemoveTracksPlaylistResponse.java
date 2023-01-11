package openapisdk.models.operations;



public class EndpointRemoveTracksPlaylistResponse {
    public String contentType;
    public EndpointRemoveTracksPlaylistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointRemoveTracksPlaylistResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.SnapshotIdObject snapshotIdObject;
    public EndpointRemoveTracksPlaylistResponse withSnapshotIdObject(openapisdk.models.shared.SnapshotIdObject snapshotIdObject) {
        this.snapshotIdObject = snapshotIdObject;
        return this;
    }
    public Long statusCode;
    public EndpointRemoveTracksPlaylistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}