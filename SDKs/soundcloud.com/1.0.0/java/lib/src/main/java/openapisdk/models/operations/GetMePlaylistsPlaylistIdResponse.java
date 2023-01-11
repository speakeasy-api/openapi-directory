package openapisdk.models.operations;



public class GetMePlaylistsPlaylistIdResponse {
    public String contentType;
    public GetMePlaylistsPlaylistIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Playlist playlist;
    public GetMePlaylistsPlaylistIdResponse withPlaylist(openapisdk.models.shared.Playlist playlist) {
        this.playlist = playlist;
        return this;
    }
    public Long statusCode;
    public GetMePlaylistsPlaylistIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}