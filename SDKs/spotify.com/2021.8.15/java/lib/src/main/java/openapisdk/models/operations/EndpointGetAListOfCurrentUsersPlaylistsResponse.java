package openapisdk.models.operations;



public class EndpointGetAListOfCurrentUsersPlaylistsResponse {
    public String contentType;
    public EndpointGetAListOfCurrentUsersPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseObject errorResponseObject;
    public EndpointGetAListOfCurrentUsersPlaylistsResponse withErrorResponseObject(openapisdk.models.shared.ErrorResponseObject errorResponseObject) {
        this.errorResponseObject = errorResponseObject;
        return this;
    }
    public Long statusCode;
    public EndpointGetAListOfCurrentUsersPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson endpointGetAListOfCurrentUsersPlaylists200ApplicationJSONObject;
    public EndpointGetAListOfCurrentUsersPlaylistsResponse withEndpointGetAListOfCurrentUsersPlaylists200ApplicationJsonObject(EndpointGetAListOfCurrentUsersPlaylists200ApplicationJson endpointGetAListOfCurrentUsersPlaylists200ApplicationJSONObject) {
        this.endpointGetAListOfCurrentUsersPlaylists200ApplicationJSONObject = endpointGetAListOfCurrentUsersPlaylists200ApplicationJSONObject;
        return this;
    }
}