package openapisdk.models.operations;



public class PostPlaylistsResponse {
    public String contentType;
    public PostPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostPlaylistsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPlaylists201ApplicationJson postPlaylists201ApplicationJSONObject;
    public PostPlaylistsResponse withPostPlaylists201ApplicationJsonObject(PostPlaylists201ApplicationJson postPlaylists201ApplicationJSONObject) {
        this.postPlaylists201ApplicationJSONObject = postPlaylists201ApplicationJSONObject;
        return this;
    }
}