package openapisdk.models.operations;



public class YoutubePlaylistsUpdateResponse {
    public String contentType;
    public YoutubePlaylistsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Playlist playlist;
    public YoutubePlaylistsUpdateResponse withPlaylist(openapisdk.models.shared.Playlist playlist) {
        this.playlist = playlist;
        return this;
    }
    public Long statusCode;
    public YoutubePlaylistsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}