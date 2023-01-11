package openapisdk.models.operations;



public class EndpointGetListUsersPlaylistsResponse {
    public String contentType;
    public EndpointGetListUsersPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetListUsersPlaylistsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetListUsersPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetListUsersPlaylists200ApplicationJson endpointGetListUsersPlaylists200ApplicationJSONObject;
    public EndpointGetListUsersPlaylistsResponse withEndpointGetListUsersPlaylists200ApplicationJsonObject(EndpointGetListUsersPlaylists200ApplicationJson endpointGetListUsersPlaylists200ApplicationJSONObject) {
        this.endpointGetListUsersPlaylists200ApplicationJSONObject = endpointGetListUsersPlaylists200ApplicationJSONObject;
        return this;
    }
}