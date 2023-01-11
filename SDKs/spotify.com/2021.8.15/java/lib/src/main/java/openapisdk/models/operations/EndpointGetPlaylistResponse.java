package openapisdk.models.operations;



public class EndpointGetPlaylistResponse {
    public String contentType;
    public EndpointGetPlaylistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetPlaylistResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public openapisdk.models.shared.PlaylistObject playlistObject;
    public EndpointGetPlaylistResponse withPlaylistObject(openapisdk.models.shared.PlaylistObject playlistObject) {
        this.playlistObject = playlistObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetPlaylistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}