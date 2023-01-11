package openapisdk.models.operations;



public class GetPlaylistsPlaylistIdResponse {
    public String contentType;
    public GetPlaylistsPlaylistIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPlaylistsPlaylistIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Playlist playlist;
    public GetPlaylistsPlaylistIdResponse withPlaylist(openapisdk.models.shared.Playlist playlist) {
        this.playlist = playlist;
        return this;
    }
    public Long statusCode;
    public GetPlaylistsPlaylistIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}