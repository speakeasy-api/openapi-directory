package openapisdk.models.operations;



public class GetPlaylistsPlaylistIdTracksResponse {
    public String contentType;
    public GetPlaylistsPlaylistIdTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPlaylistsPlaylistIdTracksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetPlaylistsPlaylistIdTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf;
    public GetPlaylistsPlaylistIdTracksResponse withGetPlaylistsPlaylistIdTracks200ApplicationJsonOneOf(Object getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf) {
        this.getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf = getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf;
        return this;
    }
}