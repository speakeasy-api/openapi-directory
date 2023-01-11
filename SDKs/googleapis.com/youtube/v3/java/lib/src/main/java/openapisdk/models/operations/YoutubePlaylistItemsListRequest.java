package openapisdk.models.operations;



public class YoutubePlaylistItemsListRequest {
    public YoutubePlaylistItemsListQueryParams queryParams;
    public YoutubePlaylistItemsListRequest withQueryParams(YoutubePlaylistItemsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubePlaylistItemsListSecurity security;
    public YoutubePlaylistItemsListRequest withSecurity(YoutubePlaylistItemsListSecurity security) {
        this.security = security;
        return this;
    }
}