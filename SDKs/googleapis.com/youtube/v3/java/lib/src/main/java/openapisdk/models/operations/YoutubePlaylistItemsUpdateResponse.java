package openapisdk.models.operations;



public class YoutubePlaylistItemsUpdateResponse {
    public String contentType;
    public YoutubePlaylistItemsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlaylistItem playlistItem;
    public YoutubePlaylistItemsUpdateResponse withPlaylistItem(openapisdk.models.shared.PlaylistItem playlistItem) {
        this.playlistItem = playlistItem;
        return this;
    }
    public Long statusCode;
    public YoutubePlaylistItemsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}