package openapisdk.models.operations;



public class EndpointCreatePlaylistResponse {
    public String contentType;
    public EndpointCreatePlaylistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointCreatePlaylistResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.PlaylistObject playlistObject;
    public EndpointCreatePlaylistResponse withPlaylistObject(openapisdk.models.shared.PlaylistObject playlistObject) {
        this.playlistObject = playlistObject;
        return this;
    }
    public Long statusCode;
    public EndpointCreatePlaylistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}