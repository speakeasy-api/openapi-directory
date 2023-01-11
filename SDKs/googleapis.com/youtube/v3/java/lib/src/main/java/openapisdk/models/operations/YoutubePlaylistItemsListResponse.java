package openapisdk.models.operations;



public class YoutubePlaylistItemsListResponse {
    public String contentType;
    public YoutubePlaylistItemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlaylistItemListResponse playlistItemListResponse;
    public YoutubePlaylistItemsListResponse withPlaylistItemListResponse(openapisdk.models.shared.PlaylistItemListResponse playlistItemListResponse) {
        this.playlistItemListResponse = playlistItemListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubePlaylistItemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}