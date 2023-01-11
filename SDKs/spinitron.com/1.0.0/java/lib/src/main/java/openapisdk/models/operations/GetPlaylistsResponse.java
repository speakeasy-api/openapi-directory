package openapisdk.models.operations;



public class GetPlaylistsResponse {
    public byte[] body;
    public GetPlaylistsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPlaylists200ApplicationJson getPlaylists200ApplicationJSONObject;
    public GetPlaylistsResponse withGetPlaylists200ApplicationJsonObject(GetPlaylists200ApplicationJson getPlaylists200ApplicationJSONObject) {
        this.getPlaylists200ApplicationJSONObject = getPlaylists200ApplicationJSONObject;
        return this;
    }
}