package openapisdk.models.operations;



public class YoutubePlaylistsInsertResponse {
    public String contentType;
    public YoutubePlaylistsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Playlist playlist;
    public YoutubePlaylistsInsertResponse withPlaylist(openapisdk.models.shared.Playlist playlist) {
        this.playlist = playlist;
        return this;
    }
    public Long statusCode;
    public YoutubePlaylistsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}