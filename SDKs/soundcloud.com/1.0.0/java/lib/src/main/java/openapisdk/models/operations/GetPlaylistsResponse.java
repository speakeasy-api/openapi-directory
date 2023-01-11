package openapisdk.models.operations;



public class GetPlaylistsResponse {
    public String contentType;
    public GetPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPlaylistsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getPlaylists200ApplicationJSONOneOf;
    public GetPlaylistsResponse withGetPlaylists200ApplicationJsonOneOf(Object getPlaylists200ApplicationJSONOneOf) {
        this.getPlaylists200ApplicationJSONOneOf = getPlaylists200ApplicationJSONOneOf;
        return this;
    }
}