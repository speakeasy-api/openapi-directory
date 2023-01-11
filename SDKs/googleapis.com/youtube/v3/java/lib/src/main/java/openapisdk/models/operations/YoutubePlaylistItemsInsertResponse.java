package openapisdk.models.operations;



public class YoutubePlaylistItemsInsertResponse {
    public String contentType;
    public YoutubePlaylistItemsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlaylistItem playlistItem;
    public YoutubePlaylistItemsInsertResponse withPlaylistItem(openapisdk.models.shared.PlaylistItem playlistItem) {
        this.playlistItem = playlistItem;
        return this;
    }
    public Long statusCode;
    public YoutubePlaylistItemsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}