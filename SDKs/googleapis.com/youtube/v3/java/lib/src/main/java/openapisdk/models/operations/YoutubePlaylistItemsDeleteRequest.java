package openapisdk.models.operations;



public class YoutubePlaylistItemsDeleteRequest {
    public YoutubePlaylistItemsDeleteQueryParams queryParams;
    public YoutubePlaylistItemsDeleteRequest withQueryParams(YoutubePlaylistItemsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubePlaylistItemsDeleteSecurity security;
    public YoutubePlaylistItemsDeleteRequest withSecurity(YoutubePlaylistItemsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}