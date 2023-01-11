package openapisdk.models.operations;



public class GetUsersUserIdPlaylistsResponse {
    public String contentType;
    public GetUsersUserIdPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdPlaylistsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUsersUserIdPlaylists200ApplicationJSONOneOf;
    public GetUsersUserIdPlaylistsResponse withGetUsersUserIdPlaylists200ApplicationJsonOneOf(Object getUsersUserIdPlaylists200ApplicationJSONOneOf) {
        this.getUsersUserIdPlaylists200ApplicationJSONOneOf = getUsersUserIdPlaylists200ApplicationJSONOneOf;
        return this;
    }
}