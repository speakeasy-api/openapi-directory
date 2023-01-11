package openapisdk.models.operations;



public class EndpointReorderOrReplacePlaylistsTracksResponse {
    public String contentType;
    public EndpointReorderOrReplacePlaylistsTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointReorderOrReplacePlaylistsTracksResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.SnapshotIdObject snapshotIdObject;
    public EndpointReorderOrReplacePlaylistsTracksResponse withSnapshotIdObject(openapisdk.models.shared.SnapshotIdObject snapshotIdObject) {
        this.snapshotIdObject = snapshotIdObject;
        return this;
    }
    public Long statusCode;
    public EndpointReorderOrReplacePlaylistsTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}