package openapisdk.models.operations;



public class EndpointCheckIfUserFollowsPlaylistResponse {
    public String contentType;
    public EndpointCheckIfUserFollowsPlaylistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointCheckIfUserFollowsPlaylistResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointCheckIfUserFollowsPlaylistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Boolean[] endpointCheckIfUserFollowsPlaylist200ApplicationJSONBooleans;
    public EndpointCheckIfUserFollowsPlaylistResponse withEndpointCheckIfUserFollowsPlaylist200ApplicationJsonBooleans(Boolean[] endpointCheckIfUserFollowsPlaylist200ApplicationJSONBooleans) {
        this.endpointCheckIfUserFollowsPlaylist200ApplicationJSONBooleans = endpointCheckIfUserFollowsPlaylist200ApplicationJSONBooleans;
        return this;
    }
}